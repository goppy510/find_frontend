import { useState, useEffect } from 'react';
import apiClient from '@/lib/api-client';
import { PromptType } from '@/types/home/promptTypes';

const useFetchPromptPerPage = (currentPage: number) => {
  const [prompts, setPrompts] = useState<PromptType[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const endpoint = `/api/prompts/?page=${currentPage}`;
        const response = await apiClient.get(endpoint);

        if (response.status === 200) {
          const promptsData: PromptType[] = response.data.items.map(
            (prompt: any) => ({
              id: prompt.id,
              promptUuid: prompt.prompt_uuid,
              category: prompt.category,
              generativeAiModel: prompt.generative_ai_model,
              title: prompt.title,
              about: prompt.about,
              nickname: prompt.nickname,
              likesCount: prompt.likes_count,
              bookmarksCount: prompt.bookmarks_count,
              updatedAt: prompt.updated_at,
            })
          );

          setPrompts(promptsData);
          setTotalCount(response.data.total_count);
        } else {
          setErrorMessage('詳細ページの読み込みに失敗しました。');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setErrorMessage('詳細ページの読み込みに失敗しました。');
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch();
  }, [currentPage]);

  return { prompts, errorMessage, isLoading, totalCount };
};

export default useFetchPromptPerPage;
