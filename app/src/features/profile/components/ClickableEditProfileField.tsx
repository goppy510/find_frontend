'use client';
import NextLink from "next/link";
import { Flex, Box } from '@chakra-ui/react';
import EditProfileField from '@/features/profile/components/EditProfileField';

interface ClickableProfileFieldProps {
  href: string;
  fieldName: string;
  value: string | undefined;
  onClick?: () => void;
}

const ClickableEditProfileField: React.FC<ClickableProfileFieldProps> = ({ href, fieldName, value, onClick }) => {
  return (
    <NextLink href={href} passHref>
      <Flex
        onClick={onClick}
        justify="space-between" 
        align="start" 
        mb="10"
        pl={{ base: '0', md: '10' }}
        pr={{ base: '0', md: '10' }}
        pt={{ base: '0', md: '3' }}
        pb={{ base: '0', md: '3' }}
        bg="transparent" 
        _hover={{ bg: 'gray.100' }}
        transition="background-color 0.3s"
      >
        <EditProfileField fieldName={fieldName} value={value} flex="1" />
        <Box fontSize="2sm" alignSelf="center" minWidth="60px">変更</Box>
      </Flex>
    </NextLink>
  );
}

export default ClickableEditProfileField;
