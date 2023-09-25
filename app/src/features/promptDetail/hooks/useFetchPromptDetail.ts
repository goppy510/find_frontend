import { useState, useEffect } from 'react';
import apiClient from '@/lib/api-client';
import {
  PromptDetailType,
  PromptUuid,
} from '@/features/promptDetail/types/promptDetailTypes';

const useFetchPromptDetail = (promptUuId: PromptUuid) => {
  const [promptDetail, setPromptDetail] = useState<PromptDetailType>({
    id: 0,
    promptUuid: '',
    category: '',
    about: '',
    title: '',
    inputExample: '',
    outputExample: '',
    prompt: '',
    generativeAiModel: '',
    nickname: '',
    likesCount: 0,
    bookmarksCount: 0,
    updatedAt: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleFetchPromptDetail = async () => {
      try {
        const endpoint = `/api/prompts/${promptUuId}`;
        const response = await apiClient.get(endpoint);

        if (response.status === 200) {
          const promptData: PromptDetailType = {
            id: response.data.id,
            promptUuid: response.data.prompt_uuid,
            category: response.data.category,
            title: response.data.title,
            about: response.data.about,
            inputExample: response.data.input_example,
            outputExample: response.data.output_example,
            prompt: response.data.prompt,
            generativeAiModel: response.data.generative_ai_model,
            nickname: response.data.nickname,
            likesCount: response.data.likes_count,
            bookmarksCount: response.data.bookmarks_count,
            updatedAt: response.data.updated_at,
          };
          setPromptDetail(promptData);
        } else {
          setErrorMessage('プロフィールの読み込みに失敗しました。');
        }
      } catch (error) {
        console.error('Fetch Prompt Failed:', error);
        setErrorMessage('プロフィールの読み込みに失敗しました。');
      }
    };

    handleFetchPromptDetail();
  }, [promptUuId]);

  return { promptDetail, errorMessage };
};

export default useFetchPromptDetail;
