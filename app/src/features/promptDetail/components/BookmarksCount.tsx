import { Box, Flex } from "@chakra-ui/react";
import { FaBookReader } from 'react-icons/fa';

type Props = {
  bookmarksCount: number;
};

export default function BookmarksCount({ bookmarksCount }: Props) {
  return (
    <Box>
      <Flex alignItems="center">
        <Box as="span" fontWeight="bold" mr="2">
          <FaBookReader />
        </Box>
        <Box as="span">{bookmarksCount}</Box>
      </Flex>
    </Box>
  );
}
