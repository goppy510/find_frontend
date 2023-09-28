import { useState } from 'react';
import apiClient from '@/lib/api-client';

export function useUpdateProfile() {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const updateProfile = async (key: string, val: string) => {
    try {
      const endpoint = '/api/users/profile';
      const params = { profiles: { [key]: val } };
      const response = await apiClient.put(endpoint, params);

      if (response.status === 200) {
        return true;
      } else {
        setErrorMessage('更新に失敗しました。');
        return false;
      }
    } catch (error) {
      console.error('update failed:', error);
      setErrorMessage('更新に失敗しました。');
      return false;
    }
  };

  return {
    value,
    setValue,
    errorMessage,
    updateProfile,
  };
}
