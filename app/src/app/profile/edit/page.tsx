"use client";
import { Box, Container, Text, VStack, Divider } from '@chakra-ui/react';
import useFetchProfile from '@/features/profile/hooks/useFetchProfile';
import ClickableEditProfileField from '@/features/profile/components/ClickableEditProfileField';

function EditProfile() {
  const { profile, errorMessage } = useFetchProfile();
  const userName = profile?.name;
  const phoneNumber = profile?.phoneNumber;
  const companyName = profile?.companyName;
  const employeeCount = profile?.employeeCount;
  const industry = profile?.industry;
  const position = profile?.position;
  const businessModel = profile?.businessModel;

  // APIから取得した情報を遷移先に埋め込むためセッションストレージに保存する
  const handleClick = (editValue: any) => {
    window.sessionStorage.setItem("profileEditValue", editValue);
  }

  return (
    <Container maxW="xl" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <VStack align="start" spacing={2} mb='5'>
        <Text fontSize="lg" fontWeight="bold">
          アカウント
        </Text>
      </VStack>
      <Divider colorScheme={'gray'} size='lg' mb="5"/>
      <Box
        py={{ base: '4', sm: '8' }} 
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg-surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <ClickableEditProfileField onClick={() => handleClick(userName)} href='/profile/edit/name' fieldName="名前" value={userName} />
        <ClickableEditProfileField onClick={() => handleClick(phoneNumber)} href='/profile/edit/phonenumber' fieldName="電話番号" value={phoneNumber} />
        <ClickableEditProfileField onClick={() => handleClick(companyName)} href='/profile/edit/company' fieldName="会社名" value={companyName} />
        <ClickableEditProfileField onClick={() => handleClick(employeeCount)} href='/profile/edit/employee' fieldName="従業員数" value={employeeCount} />
        <ClickableEditProfileField onClick={() => handleClick(industry)} href='/profile/edit/industry' fieldName="業種" value={industry} />
        <ClickableEditProfileField onClick={() => handleClick(position)} href='/profile/edit/position' fieldName="役職" value={position} />
        <ClickableEditProfileField onClick={() => handleClick(businessModel)} href='/profile/edit/businessmodel' fieldName="ビジネスモデル" value={businessModel} />
      </Box>
    </Container>
  );
}

export default EditProfile;


