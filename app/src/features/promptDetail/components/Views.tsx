import { Box, Flex } from "@chakra-ui/react";
import { FaEye } from 'react-icons/fa';

type Props = {
  views: number;
};

export default function Views({ views }: Props) {
  return (
    <Box>
      <Flex alignItems="center">
        <Box as="span" fontWeight="bold" mr="2">
          <FaEye />
        </Box>
        <Box as="span">{views}</Box>
      </Flex>
    </Box>
  );
}
