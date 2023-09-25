import { Box, Flex } from "@chakra-ui/react";
import { FaThumbsUp } from 'react-icons/fa';

type Props = {
  likesCount: number;
};

export default function LikesCount({ likesCount }: Props) {
  return (
    <Box>
      <Flex alignItems="center">
        <Box as="span" fontWeight="bold" mr="2">
          <FaThumbsUp />
        </Box>
        <Box as="span">{likesCount}</Box>
      </Flex>
    </Box>
  );
}
