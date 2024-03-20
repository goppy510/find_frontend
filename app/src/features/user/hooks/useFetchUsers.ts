import { useState, useEffect } from 'react';
import apiClient from '@/lib/api-client';
import { User } from '@/features/user/types/userTypes';

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleFetch = async () => {
    try {
      const response = await apiClient.get<User[]>('/api/users');
      if (response.status === 200) {
        setUsers(response.data);
      } else {
        setErrorMessage('メンバーの取得に失敗しました。');
      }
    } catch (error) {
      setErrorMessage('メンバーの取得中にエラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return { users, setUsers, isLoading, errorMessage, handleFetch };
};

export default useFetchUsers;
