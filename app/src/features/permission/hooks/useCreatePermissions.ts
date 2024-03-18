import { useState } from 'react';
import apiClient from '@/lib/api-client';
import axios from 'axios';

const useCreatePermission = () => {
  const [permissions, setPermissions] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [forbiddenErrorMessage, setForbiddenErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isCreated, setIsCreated] = useState(false);

  const resetMessages = () => {
    setErrorMessage('');
    setSuccessMessage('');
    setForbiddenErrorMessage('');
  };

  const handleCreate = async (email: string, permissions: string[]) => {
    resetMessages();
    try {
      const endpoint = '/api/permissions';
      const params = {
        permissions: {
          email: email,
          permissions: permissions,
        },
      };
      const response = await apiClient.post(endpoint, params);

      if (response.status === 200) {
        setSuccessMessage('権限を登録しました');
        setIsCreated(true);
      } else {
        setErrorMessage('権限登録に失敗しました');
      }
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        // ここで error は AxiosError 型として扱われます
        if (error.response && error.response.status === 403) {
          setForbiddenErrorMessage('ユーザーが見つかりませんでした');
        } else {
          setErrorMessage('権限登録に失敗しました');
        }
      } else {
        setErrorMessage('権限登録に失敗しました');
      }
    } finally {
      setIsLoading(false); // 成功または失敗後にisLoadingをfalseに設定
    }
  };

  return {
    isLoading,
    setIsLoading,
    errorMessage,
    successMessage,
    forbiddenErrorMessage,
    setPermissions,
    handleCreate,
    isCreated,
    setIsCreated,
  };
};

export default useCreatePermission;
