import axios from 'axios';

const baseURL =
  process.env.MAKELEAD_APP_API_ENDPOINT || 'http://localhost:3000';

// axios の初期設定
// 例：　await apiClient.get('/endopoint')
const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

// リクエスト時にトークンをヘッダーに含める
apiClient.interceptors.request.use(
  (config) => {
    const csrfToken = getCookie('csrf-token'); // CSRFトークンを取得するための関数
    if (csrfToken) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// レスポンスのエラー判定処理
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error?.response?.status;
    switch (status) {
      case 401:
        console.error('Unauthorized error');
        // ログアウト処理など
        break;
      case 404:
        console.error('Not found error');
        // 404エラー処理
        break;
      case 500:
        console.error('Internal server error');
        // 500エラー処理
        break;
      default:
        console.error('Unexpected error occurred');
        break;
    }
    return Promise.reject(error);
  }
);

const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

export default apiClient;
