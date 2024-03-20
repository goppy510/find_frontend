// useDeleteContracts フック
import { useState } from 'react';
import apiClient from '@/lib/api-client';
import { set } from 'react-hook-form';

const useDeleteUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = async (userId: number) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await apiClient.delete(`/api/users/${userId}`);
      setSuccessMessage('メンバーを削除しました。');
      // 他の処理が必要な場合はここに記述
    } catch (error) {
      setErrorMessage('メンバーの削除中にエラーが発生しました。');
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
    setIsLoading,
  };
};

export default useDeleteUser;
