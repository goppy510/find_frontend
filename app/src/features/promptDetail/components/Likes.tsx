import { Box, Flex } from "@chakra-ui/react";
import { FaThumbsUp } from 'react-icons/fa';

type Props = {
  likes: number;
};

export default function Likes({ likes }: Props) {
  return (
    <Box>
      <Flex alignItems="center">
        <Box as="span" fontWeight="bold" mr="2">
          <FaThumbsUp />
        </Box>
        <Box as="span">{likes}</Box>
      </Flex>
    </Box>
  );
}
