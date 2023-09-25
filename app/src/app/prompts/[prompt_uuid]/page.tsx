'use client';
import React from "react";
import { Box } from "@chakra-ui/react";
import PromptDetail from "@/features/promptDetail/components/PromptDetail";
import { PromptUuid } from "@/features/promptDetail/types/promptDetailTypes";
import { useEffect, useState } from "react";
import apiClient from "@/lib/api-client";

export default function PostPage({ params }: { params: { uuid: PromptUuid } }) {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // API エンドポイントを叩いてプロフィール情報を取得
    apiClient.get('/api/users/profile')
      .then(response => {
        setUserProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch user profile:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (!userProfile) {
    return (
      <div>
        <p>プロフィール情報が未登録です。</p>
        <a href="/profile/register">プロフィールを登録する</a>
      </div>
    );
  }

  return (
    <Box>
      <PromptDetail uuid={ params.uuid } />
    </Box>
  );
}
