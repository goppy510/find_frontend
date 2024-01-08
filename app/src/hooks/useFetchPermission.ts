import { useState, useEffect } from 'react';
import apiClient from '@/lib/api-client';
import { PermissionsType, UserPermission } from '@/types/home/permissionTypes';

const useFetchPermissions = () => {
  const [permissions, setPermissions] = useState<UserPermission[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const endpoint = `/api/permissions/${userId}`;
        const response = await apiClient.get<{ permissions: UserPermission[] }>(
          endpoint
        );
        if (response.status === 200 && response.data.permissions) {
          setPermissions(response.data.permissions);
        } else {
          setErrorMessage('権限の取得に失敗しました。');
        }
      } catch (error) {
        setErrorMessage('権限の取得中にエラーが発生しました。');
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch();
  }, []);

  return { permissions, isLoading, errorMessage };
};

export default useFetchPermissions;
