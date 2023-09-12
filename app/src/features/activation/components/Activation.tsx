'use client'
import {
  Box,
  Container,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input
} from "@/features/components";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/api-client";
import { useEffect, useState } from "react";

export default function ActivationWindow() {
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (!token) {
      setMessage('トークンが不正です。');
      return;
    }

    const handleActivation = async () => {
      try {
        const endpoint = '/api/users/activation'
        const response = await apiClient.post(endpoint, {}, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.status === 200) {
          setMessage('本登録が完了しました。');
          setTimeout(() => {
            router.push('/login');
          }, 2000);
        } else {
          setMessage('本登録に失敗しました。');
        }
      } catch (error) {
        console.error('Activation failed:', error);
        setMessage('本登録に失敗しました。');
      }
    };

    handleActivation();
  }, []);

    return (
      <div>
        <p>{message}</p>
      </div>
    );
}
