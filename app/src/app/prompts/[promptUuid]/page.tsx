'use client';
import React from "react";
import { Box } from "@chakra-ui/react";
import PromptDetail from "@/features/promptDetail/components/PromptDetail";
import { PromptUuid } from "@/features/promptDetail/types/promptDetailTypes";
import { useEffect, useState } from "react";
import useFetchProfile from '@/features/profile/hooks/useFetchProfile';

export default function PromptPage({ params }: { params: { promptUuid: PromptUuid } }) {
  const { profile } = useFetchProfile();
  const [loading, setLoading] = useState(true);

  if (!profile) {
    return (
      <div>
        <p>プロフィール情報が未登録です。</p>
        <a href="/profile/register">プロフィールを登録する</a>
      </div>
    );
  }

  return (
    <Box>
      <PromptDetail promptUuid={ params.promptUuid } />
    </Box>
  );
}
