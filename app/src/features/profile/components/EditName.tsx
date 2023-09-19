import { Flex } from "@chakra-ui/react";
import EditProfileCard from "./EditProfileCard";

type ProfileItemProps = {
  fieldName: string;
  value: string | undefined;
  editHref: string;
};

const EditName: React.FC<ProfileItemProps> = ({ fieldName, value, editHref }) => {
  return (
    <Flex justify="space-between" align="start">
      <VStack align="start" spacing={2}>
        <Text fontSize="2lg" fontWeight="bold">
          名前
        </Text>
        <span>{userName}</span>
      </VStack>
      <EditProfileCard href={editHref} />
    </Flex>
  );
};

export default EditName;
