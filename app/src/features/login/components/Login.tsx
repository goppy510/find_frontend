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
import { useState } from "react";
import useLogin from "@/features/login/hooks/useLogin";
import ErrorToast from "@/components/elements/toast/ErrorToast";
import Loading from "@/components/elements/loading/Loading";

export default function LoginWindow() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, errorMessage, isLoading } = useLogin();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      {errorMessage && <ErrorToast message={errorMessage} />}

      <Stack spacing="8">
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
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
              onClick={() => handleLogin(email, password)}
            >
              ログイン
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
