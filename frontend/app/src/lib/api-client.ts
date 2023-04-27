import axios from "axios"
import Cookies from "js-cookie"

const baseURL = process.env.MAKELEAD_APP_API_ENDPOINT;

// 共通ヘッダー
const headers = {
  "Content-Type": "application/json",
};

// axios　の初期設定
export const ApiClient = axios.create({ baseURL, headers });

// レスポンスのエラー判定処理
ApiClient.interceptors.response.use(
  (response) => {
    Cookies.set("uid", response.headers["uid"]);
    Cookies.set("client", response.headers["client"])
    Cookies.set("access-token", response.headers['access-token']);
    return response;
  },
  (error) => {
    Cookies.remove("uid");
    Cookies.remove("client");
    Cookies.remove("access-token");
    console.log(error);
    switch(error?.response?.status) {
      case 401:
        break;
      case 404:
        break;
      default:
        console.log("== internal server error");
    }

    const errorMessage = (error.response?.data?.message || "").split(",");
    throw new Error(errorMessage);
  }
);

// token付与等のリクエスト処理の共通化
ApiClient.interceptors.request.use(async (request: any) => {
    request.headers["uid"] = Cookies.get("uid");
    request.headers["client"] = Cookies.get("client");
    request.headers["access-token"] = Cookies.get("access-token");
    return request;
});
