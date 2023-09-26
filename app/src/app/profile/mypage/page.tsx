'use client';
import MyPage from '@/features/profile/components/MyPage';
import useFetchProfile from "@/features/profile/hooks/useFetchProfile";
import ErrorToast from "@/components/elements/toast/ErrorToast";
import Loading from "@/components/elements/loading/Loading";

export default function Account({ children, } : { children: React.ReactNode }) {
  const { profile, errorMessage, isLoading } = useFetchProfile();

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (errorMessage) {
    return (
      <ErrorToast message={errorMessage} />
    )
  }

  return (
      <MyPage profile={profile} />
  );
}
