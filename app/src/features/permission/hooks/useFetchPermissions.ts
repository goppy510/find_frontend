import { useState, useEffect } from 'react';
import apiClient from '@/lib/api-client';
import { Permission } from '@/features/permission/types/permissionTypes';

const useFetchPermissions = () => {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleFetch = async () => {
    try {
      const response = await apiClient.get<Permission[]>('/api/permissions');
      if (response.status === 200) {
        setPermissions(response.data);
      } else {
        setErrorMessage('権限データの取得に失敗しました。');
      }
    } catch (error) {
      setErrorMessage('権限データの取得中にエラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return { permissions, setPermissions, isLoading, errorMessage, handleFetch };
};

export default useFetchPermissions;
