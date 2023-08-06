import {
  Box,
  Flex
} from "@/features/components";
import {
  FaBookReader
} from 'react-icons/fa';

type StatProps = {
  memberViews: number;
};

export default function MemberViews({ memberViews }: StatProps) {

  return (
    <Flex alignItems="center">
    <Box as="span" fontWeight="bold" mr="2">
      <FaBookReader />
    </Box>
    <Box as="span">{memberViews}</Box>
  </Flex>
  );
}
