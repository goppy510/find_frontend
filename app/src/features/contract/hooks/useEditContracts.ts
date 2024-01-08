import { useState } from 'react';
import apiClient from '@/lib/api-client';

const useEditContract = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  const resetMessages = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleEdit = async (user_id: number, max_member_count: string) => {
    resetMessages();
    try {
      const endpoint = `/api/contracts/${user_id}?max_member_count=${max_member_count}`;
      const params = {
        max_member_count: Number(max_member_count),
      };
      const response = await apiClient.put(endpoint, params);

      if (response.status === 200) {
        setSuccessMessage('契約データを更新しました');
        setIsEdited(true);
      } else {
        setErrorMessage('契約データの更新に失敗しました');
      }
    } catch (error) {
      setErrorMessage('契約データの更新に失敗しました');
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

export default useEditContract;
