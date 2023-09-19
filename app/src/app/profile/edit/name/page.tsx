'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup, Input, Box, Container } from "@chakra-ui/react";
import { useUpdateProfile } from "@/features/profile/hooks/useUpdateProfile";

export default function editTextForm() {
  const { value, setValue, updateProfile } = useUpdateProfile();
  const router = useRouter(); 

  useEffect(() => {
    const storedValue = window.sessionStorage.getItem("profileEditValue");
    if (storedValue) {
      setValue(storedValue);
      // 必要に応じてSession Storageからその値を削除
      window.sessionStorage.removeItem("profileEditValue");
    }
  }, []);

  // 保存ボタンの処理（実際の処理を追加する必要があります）
  const isButtonEnabled = value !== '';
  const handleUpdate = async () => {
    if (!isButtonEnabled) {
      return;
    }
    const success = await updateProfile('name', value);
    if (success) {
      router.back();
    }
  };

  // キャンセル
  const handleCancel = async () => {
    router.back();
  };

  return (
    <Container maxW="xl" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Box>
        <Input
          id='name'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <ButtonGroup mt="4">
          <Button variant="outline" onClick={handleCancel} >キャンセル</Button>
          <Button colorScheme="teal" onClick={handleUpdate} >保存</Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
