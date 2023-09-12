'use client';
import { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Button
} from "@chakra-ui/react";
import apiClient from "@/lib/api-client";

export default function ProfilePage() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [employeeCount, setEmployeeCount] = useState('');
  const [industry, setIndustry] = useState('');
  const [position, setPosition] = useState('');
  const [businessModel, setBusinessModel] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isButtonEnabled = name !== '' && phoneNumber !== '' && companyName !== '' && employeeCount !== '' && industry != '' && position != '' && businessModel != '';

  const handleSubmit = async () => {
    if (!isButtonEnabled) {
      return;
    }

    try {
      const endpoint = '/api/users/profile'
      const response = await apiClient.post(endpoint, {
        profiles: {
          name, 
          phone_number: phoneNumber,
          company_name: companyName,
          employee_count: employeeCount,
          industry,
          position,
          business_model: businessModel,
        }
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
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg-surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <FormControl mt={4}>
          <FormLabel htmlFor="name">名前</FormLabel>
          <Input
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel htmlFor="phonNunmber">電話番号</FormLabel>
          <Input
            id='phoneNumber'
            type='tel'
            pattern='[0-9]*'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel htmlFor="companyName">会社名</FormLabel>
          <Input
            id='companyName'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel htmlFor='employeeCount'>従業員数</FormLabel>
          <RadioGroup
            id='employeeCount'
            value={employeeCount}
            onChange={setEmployeeCount}
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
        </FormControl>

        <FormControl mt={4}>
          <FormLabel htmlFor='industry'>業種</FormLabel>
          <RadioGroup
            id='industry'
            value={industry}
            onChange={setIndustry}
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
        </FormControl>

        <FormControl mt={4}>
          <FormLabel hmtlFor='position'>役職</FormLabel>
          <RadioGroup
            id='position'
            value={position}
            onChange={setPosition}
          >
            <Stack>
              <Radio value="1">経営者/役員</Radio>
              <Radio value="2">部長</Radio>
              <Radio value="3">課長/マネージャー</Radio>
              <Radio value="4">主任</Radio>
              <Radio value="5">一般社員</Radio>
              <Radio value="6">代理店/クライアント提案</Radio>
              <Radio value="7">その他/個人事業主</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel htmlFor='businessModel'>ビジネスモデル</FormLabel>
          <RadioGroup
            id='businessModel'
            value={businessModel}
            onChange={setBusinessModel}
          >
            <Stack>
              <Radio value="1">BtoB</Radio>
              <Radio value="2">BtoC</Radio>
              <Radio value="3">その他</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <Button mt={6} colorScheme="blue" onClick={handleSubmit}>
          保存する
        </Button>
      </Box>
    </Container>
  );
}
