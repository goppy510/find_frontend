'use client'
import {
  Box,
  Container,
  Stack,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox
} from "@/features/components";
import apiClient from "@/lib/api-client";
import { useState } from "react";

export default function SignupWindow() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const isButtonEnabled = isChecked && password === confirmPassword && password !== '';

  const buttonStyles = {
    bg: isButtonEnabled ? "messenger.400" : "gray.300",
    color: isButtonEnabled ? "white" : "gray.500",
    cursor: isButtonEnabled ? "pointer" : "not-allowed",
    _hover: isButtonEnabled ? { bg: "messenger.500" } : {}
  };

  const handleSignup = async () => {
    if (!isButtonEnabled) {
      return;
    }
  
    try {
      const endpoint = '/api/users/signup'
      const response = await apiClient.post(endpoint, {
        email, 
        password
      });
      if (response.status === 200) {
        setIsRegistered(true);
      } else {
        setErrorMessage('会員登録に失敗しました。');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('会員登録に失敗しました。');
    }
  };

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
    {isRegistered ? (
      <Box>
        <p>メールを送りましたのでご確認ください。</p>
      </Box>
    ) : (
      <Stack spacing="8">
        <Stack spacing="6">
          {/* <Logo /> */}
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              {/* メールアドレス */}
              <FormControl>
                <FormLabel htmlFor="email">メールアドレス</FormLabel>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </FormControl>

              {/* パスワード */}
              <FormControl>
                <FormLabel htmlFor="email">パスワード（半角記号英数字）</FormLabel>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
              </FormControl>

              {/* パスワード確認用 */}
              <FormControl>
                <FormLabel htmlFor="email">パスワード確認用</FormLabel>
                  <Input 
                    id="password_confirm" 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                  />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
            <Checkbox onChange={(e) => setIsChecked(e.target.checked)}>利用規約に同意する</Checkbox>
            </HStack>
            <Stack spacing="6">
              <Button {...buttonStyles} onClick={handleSignup} disabled={!isButtonEnabled}>
                登録する
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    )}
  </Container>
  );
}
