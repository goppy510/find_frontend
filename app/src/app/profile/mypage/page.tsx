'use client';
import { MyPageType } from "@/features/profile/types/myPageTypes";
import MyPage from '@/features/profile/components/MyPage';
import apiClient from "@/lib/api-client";
import { useState, useEffect } from "react";

export default function Account({ children, } : { children: React.ReactNode }) {
  const [profile, setProfile] = useState<MyPageType | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleFetchProfile = async () => {
      try {
        const endpoint = '/api/users/profile'
        const response = await apiClient.get(endpoint);

        if (response.status === 200) {
            // ここでAPIから取得したデータを MyPageType 型として設定します
            const profile: MyPageType = {
              userId: response.data.user_id,
              name: response.data.name,
              phoneNumber: response.data.phone_number,
              companyName: response.data.company_name,
              employeeCount: response.data.employee_count,
              industry: response.data.industry,
              position: response.data.position,
              businessModel: response.data.business_model
            };
            setProfile(profile);
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

    // プロフィールデータがnullの場合、何も表示しないか、ローディングを表示するなどの処理が可能です
    if (!profile) return null;

  return (
      <MyPage profile={profile} />
  );
}
