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
} from "@chakra-ui/react";
import usePostSignup from "@/features/signup/hooks/usePostSignup";
import ErrorToast from "@/components/elements/toast/ErrorToast";
import SuccessToast from "@/components/elements/toast/SuccessToast";
import { useState } from "react";

export default function SignupWindow() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const {
    handleSignup,
    errorMessage,
    successMessage,
    duplicateErrorMessage,
    unprocessibleEntityErrorMessage
  } = usePostSignup();

  const isButtonEnabled = email && email !== '' && isChecked && password === confirmPassword && password !== '';

  const buttonStyles = {
    bg: isButtonEnabled ? "messenger.400" : "gray.300",
    color: isButtonEnabled ? "white" : "gray.500",
    cursor: isButtonEnabled ? "pointer" : "not-allowed",
    _hover: isButtonEnabled ? { bg: "messenger.500" } : {}
  };

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      {duplicateErrorMessage && <ErrorToast message={duplicateErrorMessage} />}
      {unprocessibleEntityErrorMessage && <ErrorToast message={unprocessibleEntityErrorMessage} />}
      {errorMessage && <ErrorToast message={errorMessage} />}
      {successMessage && <SuccessToast message={successMessage} />}

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
              <Button {...buttonStyles} onClick={() => handleSignup(email, password)} disabled={!isButtonEnabled}>
                会員登録する
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
