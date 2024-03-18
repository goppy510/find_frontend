// useDeleteContracts フック
import { useState } from 'react';
import apiClient from '@/lib/api-client';

const useDeletePermissions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = async (email: string) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await apiClient.delete(`/api/permissions/${email}`);
      setSuccessMessage('権限データを削除しました。');
    } catch (error) {
      setErrorMessage('権限データの削除中にエラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleDelete, isLoading, errorMessage, successMessage };
};

export default useDeletePermissions;
