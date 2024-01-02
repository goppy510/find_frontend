// /hooks/useLogin.ts
import { useState } from 'react';
import apiClient from '@/lib/api-client';

const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const resetMessages = () => {
    setErrorMessage('');
  };

  const handleLogin = async (email: string, password: string) => {
    resetMessages();
    try {
      setIsLoading(true);
      const endpoint = '/api/users/login';
      const params = { logins: { email: email, password: password } };
      const response = await apiClient.post(endpoint, params);
      if (response.status === 200) {
        localStorage.setItem('jwtToken', response.data.token);
        localStorage.setItem('userId', response.data.user_id);
        localStorage.setItem('expires', response.data.expires);
        window.location.href = '/';
      } else {
        setErrorMessage('ログインに失敗しました。');
      }
    } catch (error) {
      setErrorMessage('ログインに失敗しました。');
    } finally {
      setIsLoading(false); // 成功または失敗後にisLoadingをfalseに設定
    }
  };

  return { handleLogin, errorMessage, isLoading };
};

export default useLogin;
