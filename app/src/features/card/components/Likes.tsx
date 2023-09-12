import {
  Box,
  Flex
} from "@/features/components";
import {
  FaThumbsUp
} from 'react-icons/fa';

type StatProps = {
  likes: number;
};

export default function MemberViews({ likes }: StatProps) {

  return (
    <Flex alignItems="center">
      <Box as="span" fontWeight="bold" mr={2}>
        <FaThumbsUp />
      </Box>
      <Box as="span">{likes}</Box>
    </Flex>
  );
}
