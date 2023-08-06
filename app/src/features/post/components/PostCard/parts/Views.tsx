import { Box, Flex } from "@/features/components";
import { FaEye } from 'react-icons/fa';

type StatProps = {
  views: number;
};

export default function Title({ views }: StatProps) {

  return (
    <Flex alignItems="center">
      <Box as="span" fontWeight="bold" mr={2}>
        <FaEye />
      </Box>
      <Box as="span">{views}</Box>
    </Flex>
  );
}
