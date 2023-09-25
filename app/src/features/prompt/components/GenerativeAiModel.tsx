import {
  Box,
  Flex
} from "@chakra-ui/react";
import {
  FaLaptop
} from 'react-icons/fa';

type StatProps = {
  generativeAiModel: string;
};

export default function GenerativeAiModel({ generativeAiModel }: StatProps) {

  return (
    <Flex alignItems="center">
    <Box as="span" fontWeight="bold" mr="2">
      <FaLaptop />
    </Box>
    <Box as="span">{generativeAiModel}</Box>
  </Flex>
  );
}
