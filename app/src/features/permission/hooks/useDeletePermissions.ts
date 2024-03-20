// useDeleteContracts フック
import { useState } from 'react';
import apiClient from '@/lib/api-client';

const useDeletePermissions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = async (user_id: string) => {
    setIsLoading(true);
    setErrorMessage(null);
    const endpoint = `/api/permissions/${user_id}`;
    try {
      await apiClient.delete(endpoint);
      setSuccessMessage('権限データを削除しました。');
    } catch (error) {
      setErrorMessage('権限データの削除中にエラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleDelete,
    isLoading,
    errorMessage,
    successMessage,
    setSuccessMessage,
    setErrorMessage,
  };
};

export default useDeletePermissions;
