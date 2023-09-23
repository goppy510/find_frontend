import { Box, Flex } from "@chakra-ui/react";
import { FaBookReader } from 'react-icons/fa';

type Props = {
  memberViews: number;
};

export default function MemberViews({ memberViews }: Props) {
  return (
    <Box>
      <Flex alignItems="center">
        <Box as="span" fontWeight="bold" mr="2">
          <FaBookReader />
        </Box>
        <Box as="span">{memberViews}</Box>
      </Flex>
    </Box>
  );
}
