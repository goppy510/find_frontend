'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup, Input, Box, Container } from "@chakra-ui/react";
import { useUpdateProfile } from "@/features/profile/hooks/useUpdateProfile";

export default function editTextForm() {
  const { value, setValue, updateProfile } = useUpdateProfile();
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const router = useRouter(); 

  useEffect(() => {
    const storedValue = window.sessionStorage.getItem("profileEditValue");
    if (storedValue) {
      setValue(storedValue);
      // 必要に応じてSession Storageからその値を削除
      window.sessionStorage.removeItem("profileEditValue");
    }
  }, []);

  const validatePhoneNumber = (phoneNumber: string) => {
    const reg = /^[0-9]{10,11}$/;  // 8桁以上9桁以下の数字のみを許可する正規表現
    setIsValidPhoneNumber(reg.test(phoneNumber));
  };

  // 保存ボタンの処理
  const isButtonEnabled = value !== '' && isValidPhoneNumber;
  const handleUpdate = async () => {
    if (!isButtonEnabled) {
      return;
    }
    updateProfile('phone_number', value);
    router.back();
  };

  // キャンセル
  const handleCancel = async () => {
    router.back();
  };

  return (
    <Container maxW="xl" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Box>
        <Input
          id='phoneNumber'
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            validatePhoneNumber(e.target.value);
          }}
          isInvalid={!isValidPhoneNumber}
          errorBorderColor="red.300"
        />
        { !isValidPhoneNumber && <span style={{color: 'red'}}>電話番号は10桁以上11桁以下の数字のみを入力してください。</span> }
        <ButtonGroup mt="4">
          <Button variant="outline" onClick={handleCancel} >キャンセル</Button>
          <Button colorScheme="teal" onClick={handleUpdate} disabled={!isButtonEnabled}>保存</Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
