import { useState, useEffect } from 'react';
import apiClient from '@/lib/api-client';
import { Contract } from '@/features/contract/types/contractTypes'; // Contract型を適切に定義してください。

const useFetchContracts = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleFetch = async () => {
    try {
      const response = await apiClient.get<Contract[]>('/api/contracts');
      if (response.status === 200) {
        setContracts(response.data);
      } else {
        setErrorMessage('契約データの取得に失敗しました。');
      }
    } catch (error) {
      setErrorMessage('契約データの取得中にエラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return { contracts, setContracts, isLoading, errorMessage, handleFetch };
};

export default useFetchContracts;
