'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup, Radio, RadioGroup, Box, Container, Stack } from "@chakra-ui/react";
import { useUpdateProfile } from "@/features/profile/hooks/useUpdateProfile";
import { businessModelMapping } from "@/features/profile/const/businessModelMapping";

export default function editTextForm() {
  const { value, setValue, updateProfile } = useUpdateProfile();
  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);
  const router = useRouter(); 

  useEffect(() => {
    const storedValue = window.sessionStorage.getItem("profileEditValue");
    if (storedValue) {
      setValue(storedValue);
      // 必要に応じてSession Storageからその値を削除
      window.sessionStorage.removeItem("profileEditValue");
    }
    const mappedValue = businessModelMapping[value];
    setSelectedItem(mappedValue);
  }, [value]);

  // 保存ボタンの処理（実際の処理を追加する必要があります）
  const isButtonEnabled = value !== '';
  const handleUpdate = async () => {
    if (!selectedItem) {
      return;
    }
    const success = await updateProfile('position', selectedItem);
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
        <RadioGroup
          id='businessModel'
          value={selectedItem}
          onChange={setSelectedItem}
        >
          <Stack>
            <Radio value="1">BtoB</Radio>
            <Radio value="2">BtoC</Radio>
            <Radio value="3">その他</Radio>
          </Stack>
        </RadioGroup>
        <ButtonGroup mt="4">
          <Button variant="outline" onClick={handleCancel} >キャンセル</Button>
          <Button colorScheme="teal" onClick={handleUpdate} >保存</Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
