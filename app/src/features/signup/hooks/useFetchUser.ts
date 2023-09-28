import { useState, useEffect } from 'react';
import apiClient from '@/lib/api-client';
import { MyPageType } from '@/features/profile/types/myPageTypes';

const useFetchUser = () => {
  const [profile, setProfile] = useState<MyPageType | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleFetchUsers = async () => {
      try {
        setIsLoading(true);
        const endpoint = '/api/users/profile';
        const response = await apiClient.get(endpoint);

        if (response.status === 200) {
          const profileData: MyPageType = {
            userId: response.data.user_id,
            name: response.data.name,
            phoneNumber: response.data.phone_number,
            companyName: response.data.company_name,
            employeeCount: response.data.employee_count,
            industry: response.data.industry,
            position: response.data.position,
            businessModel: response.data.business_model,
          };
          setProfile(profileData);
        } else {
          setErrorMessage('プロフィールの読み込みに失敗しました。');
        }
      } finally {
        setIsLoading(false); // 成功または失敗後にisLoadingをfalseに設定
      }
    };

    handleFetchUsers();
  }, []);

  return { profile, errorMessage, isLoading };
};

export default useFetchUser;
