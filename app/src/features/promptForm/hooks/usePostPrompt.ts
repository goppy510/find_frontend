import { useState } from 'react';
import apiClient from '@/lib/api-client';
import { FormData } from '@/features/promptForm/types/postTypes';

const usePostPrompt = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isPosted, setIsPosted] = useState<boolean>(false);

  const handlePost = async (promptData: FormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const params = {
        prompt: promptData,
      };
      const response = await apiClient.post('/api/prompts', params);
      if (response.status === 200) {
        setSuccessMessage('プロンプトを作成しました。');
        setIsPosted(true);
      }
    } catch (error) {
      setErrorMessage('プロンプトの作成に失敗しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handlePost,
    isSubmitting,
    errorMessage,
    setErrorMessage,
    successMessage,
    setSuccessMessage,
    isPosted,
    setIsPosted,
  };
};

export default usePostPrompt;
