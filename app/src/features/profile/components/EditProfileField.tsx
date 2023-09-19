'use client';
import { VStack, Text } from "@chakra-ui/react";

type ProfileFieldProps = {
  fieldName: string;
  value: string | undefined;
};

const EditProfileField: React.FC<ProfileFieldProps> = ({ fieldName, value }) => {
  return (
    <VStack align="start" spacing={2}>
      <Text fontSize="2lg" fontWeight="bold">
        {fieldName}
      </Text>
      <span>{value}</span>
    </VStack>
  );
};

export default EditProfileField;
