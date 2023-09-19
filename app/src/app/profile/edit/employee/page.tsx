'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup, Radio, RadioGroup, Box, Container, Stack } from "@chakra-ui/react";
import { useUpdateProfile } from "@/features/profile/hooks/useUpdateProfile";
import { employeeMapping } from "@/features/profile/const/employeeMapping";

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
    const mappedValue = employeeMapping[value];
    setSelectedItem(mappedValue);
  }, [value]);

  // 保存ボタンの処理（実際の処理を追加する必要があります）
  const isButtonEnabled = value !== '';
  const handleUpdate = async () => {
    if (!selectedItem) {
      return;
    }
    const success = await updateProfile('employee_count', selectedItem);
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
            <Radio value="1">1~29名</Radio>
            <Radio value="2">30~49名</Radio>
            <Radio value="3">50~99名</Radio>
            <Radio value="4">100~299名</Radio>
            <Radio value="5">300~599名</Radio>
            <Radio value="6">600~999名</Radio>
            <Radio value="7">1000名以上</Radio>
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
