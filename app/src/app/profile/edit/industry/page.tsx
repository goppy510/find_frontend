'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup, Radio, RadioGroup, Box, Container, Stack } from "@chakra-ui/react";
import { useUpdateProfile } from "@/features/profile/hooks/useUpdateProfile";
import { industryMapping } from "@/features/profile/const/industryMapping";

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
    const mappedValue = industryMapping[value];
    setSelectedItem(mappedValue);
  }, [value]);

  // 保存ボタンの処理（実際の処理を追加する必要があります）
  const isButtonEnabled = value !== '';
  const handleUpdate = async () => {
    if (!selectedItem) {
      return;
    }
    const success = await updateProfile('industry', selectedItem);
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
          id='employeeCount'
          value={selectedItem}
          onChange={setSelectedItem}
        >
          <Stack>
            <Radio value="1">セールスプロモーション</Radio>
            <Radio value="2">広告・Web制作・マーケティング支援</Radio>
            <Radio value="3">Webサービス</Radio>
            <Radio value="4">メーカー</Radio>
            <Radio value="5">店舗運営</Radio>
            <Radio value="6">不動産</Radio>
            <Radio value="7">人材</Radio>
            <Radio value="8">その他</Radio>
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
