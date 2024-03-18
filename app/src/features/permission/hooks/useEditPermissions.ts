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

  const handleEdit = async (email: string, permissions: string[]) => {
    resetMessages();
    try {
      const params = {
        email: email,
        permissions: permissions,
      };
      const endpoint = `/api/permissions/${email}`;
      const response = await apiClient.put(endpoint, params);

      if (response.status === 200) {
        setSuccessMessage('権限データを更新しました');
        setIsEdited(true);
      } else {
        setErrorMessage('権限データの更新に失敗しました');
      }
    } catch (error) {
      setErrorMessage('権限データの更新に失敗しました');
    } finally {
      setIsLoading(false); // 成功または失敗後にisLoadingをfalseに設定
    }
  };

  return {
    isLoading,
    setIsLoading,
    errorMessage,
    successMessage,
    handleEdit,
    isEdited,
    setIsEdited,
  };
};

export default useEditPermission;
