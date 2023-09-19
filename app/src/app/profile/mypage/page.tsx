'use client';
import MyPage from '@/features/profile/components/MyPage';
import useFetchProfile from "@/features/profile/hooks/useFetchProfile";

export default function Account({ children, } : { children: React.ReactNode }) {
  const { profile, errorMessage } = useFetchProfile();

    // プロフィールデータがnullの場合、何も表示しないか、ローディングを表示するなどの処理が可能です
    if (!profile) return null;

  return (
      <MyPage profile={profile} />
  );
}
