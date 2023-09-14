'use client'
import {
  Box,
  Container,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/api-client";
import { useState } from "react";

export default function LoginWindow() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); 

  const handleLogin = async () => {
    try {
      const endpoint = '/api/users/login'
      const response = await apiClient.post(endpoint, {
        login: {
          email, 
          password
        }
      });
      if (response.status === 200) {
        localStorage.setItem('jwtToken', response.data.token);
        window.location.href = '/';
      } else {
        setErrorMessage('ログインに失敗しました。');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('ログインに失敗しました。');
    }
  };

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          {errorMessage && <div>{errorMessage}</div>}
          <Stack spacing="6">
            <FormControl>
              <FormLabel htmlFor="email">メールアドレス</FormLabel>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">パスワード（半角記号英数字）</FormLabel>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              fontSize="sm"
              fontWeight={600}
              color="white"
              bg="messenger.400"
              _hover={{
                bg: "messenger.500",
              }}
              onClick={handleLogin}
            >
              ログイン
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
