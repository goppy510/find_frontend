import { useState, useEffect } from 'react';
import apiClient from '@/lib/api-client';

const useFetchCategory = () => {
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const endpoint = '/api/prompts/categories';
        const response = await apiClient.get(endpoint);

        if (response.status === 200) {
          setCategories(response.data);
        } else {
          setErrorMessage('カテゴリーの読み込みに失敗しました。');
        }
      } catch (error) {
        console.error('Fetch Category Failed:', error);
        setErrorMessage('カテゴリーの読み込みに失敗しました。');
      }
    };

    handleFetch();
  }, []);

  return { categories, errorMessage };
};

export default useFetchCategory;
