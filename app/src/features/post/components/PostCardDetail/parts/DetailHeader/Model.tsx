import { Box, Flex } from "@/features/components";
import { FaLaptop } from 'react-icons/fa';

type Props = {
  model: string;
};

export default function Model({ model }: Props) {
  return (
    <Box>
      <Flex alignItems="center">
        <Box as="span" fontWeight="bold" mr="2">
          <FaLaptop />
        </Box>
        <Box as="span">{model}</Box>
      </Flex>
    </Box>
  );
}
