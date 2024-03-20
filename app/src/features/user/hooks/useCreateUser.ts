import { useState } from 'react';
import apiClient from '@/lib/api-client';
import axios from 'axios';
import { set } from 'react-hook-form';

const useCreateUser = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [duplicateErrorMessage, setDuplicateErrorMessage] = useState('');
  const [unprocessibleEntityErrorMessage, setUnprocessibleEntityErrorMessage] =
    useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isCreated, setIsCreated] = useState(false);

  const resetMessages = () => {
    setErrorMessage('');
    setSuccessMessage('');
    setDuplicateErrorMessage('');
    setUnprocessibleEntityErrorMessage('');
  };

  const handleSignup = async (email: string, password: string) => {
    resetMessages();
    try {
      const endpoint = '/api/users/signup';
      const params = {
        signups: {
          email: email,
          password: password,
        },
      };
      const response = await apiClient.post(endpoint, params);

      if (response.status === 200) {
        setSuccessMessage('メンバーを登録しました');
        setIsCreated(true);
      } else {
        setErrorMessage('メンバー登録に失敗しました');
      }
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        // ここで error は AxiosError 型として扱われます
        if (error.response && error.response.status === 409) {
          setDuplicateErrorMessage('このメールアドレスは既に登録されています');
        } else if (
          error.response &&
          error.response.status === 422 &&
          error.response.data.error.code === 'SignupService::EmailFormatError'
        ) {
          setUnprocessibleEntityErrorMessage(
            'メールアドレスの形式が正しくありません'
          );
        } else if (
          error.response &&
          error.response.status === 422 &&
          error.response.data.error.code ===
            'SignupService::PasswordFormatError'
        ) {
          setUnprocessibleEntityErrorMessage(
            'パスワードの形式が正しくありません'
          );
        } else {
          setErrorMessage('メンバー登録に失敗しました');
        }
      } else {
        setErrorMessage('メンバー登録に失敗しました');
      }
    } finally {
      setIsLoading(false); // 成功または失敗後にisLoadingをfalseに設定
    }
  };

  return {
    confirmPassword,
    setConfirmPassword,
    isLoading,
    setIsLoading,
    errorMessage,
    duplicateErrorMessage,
    unprocessibleEntityErrorMessage,
    successMessage,
    handleSignup,
    isCreated,
    setIsCreated,
    setSuccessMessage,
    setErrorMessage,
  };
};

export default useCreateUser;
