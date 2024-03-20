import { useState } from 'react';
import apiClient from '@/lib/api-client';

const useEditPermission = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  const resetMessages = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleUpdate = async (user_id: string, permissions: string[]) => {
    resetMessages();
    try {
      const endpoint = `/api/permissions/${user_id}`;
      const params = {
        permissions: permissions,
      };
      const response = await apiClient.put(endpoint, params);

      if (response.status === 200) {
        setSuccessMessage('権限を更新しました');
        setIsEdited(true);
      } else {
        setErrorMessage('権限の更新に失敗しました');
      }
    } catch (error) {
      setErrorMessage('権限の更新に失敗しました');
    } finally {
      setIsLoading(false); // 成功または失敗後にisLoadingをfalseに設定
    }
  };

  return {
    isLoading,
    setIsLoading,
    errorMessage,
    successMessage,
    handleUpdate,
    isEdited,
    setIsEdited,
    setSuccessMessage,
    setErrorMessage,
  };
};

export default useEditPermission;
