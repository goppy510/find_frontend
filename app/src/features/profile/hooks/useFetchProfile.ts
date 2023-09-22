import { useState, useEffect } from 'react';
import apiClient from '@/lib/api-client';

type MyPageType = {
  userId: number;
  name: string;
  phoneNumber: string;
  companyName: string;
  employeeCount: string;
  industry: string;
  position: string;
  businessModel: string;
};

const useFetchProfile = () => {
  const [profile, setProfile] = useState<MyPageType | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleFetchProfile = async () => {
      try {
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
      } catch (error) {
        console.error('Fetch Profile Failed:', error);
        setErrorMessage('プロフィールの読み込みに失敗しました。');
      }
    };

    handleFetchProfile();
  }, []);

  return { profile, errorMessage };
};

export default useFetchProfile;
