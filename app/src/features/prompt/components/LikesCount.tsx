import {
  Box,
  Flex
} from "@chakra-ui/react";
import {
  FaThumbsUp
} from 'react-icons/fa';

type StatProps = {
  likesCount: number;
};

export default function LikesCount({ likesCount }: StatProps) {

  return (
    <Flex alignItems="center">
      <Box as="span" fontWeight="bold" mr={2}>
        <FaThumbsUp />
      </Box>
      <Box as="span">{likesCount}</Box>
    </Flex>
  );
}
