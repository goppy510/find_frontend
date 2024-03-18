// useDeleteContracts フック
import { useState } from 'react';
import apiClient from '@/lib/api-client';

const useDeleteContracts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = async (userId: number) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await apiClient.delete(`/api/contracts/${userId}`);
      setSuccessMessage('契約データを削除しました。');
      // 他の処理が必要な場合はここに記述
    } catch (error) {
      setErrorMessage('契約データの削除中にエラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleDelete, isLoading, errorMessage, successMessage };
};

export default useDeleteContracts;
