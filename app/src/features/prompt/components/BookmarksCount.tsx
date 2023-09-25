import {
  Box,
  Flex
} from "@chakra-ui/react";
import {
  FaBookReader
} from 'react-icons/fa';

type StatProps = {
  bookmarksCount: number;
};

export default function BookmarksCount({ bookmarksCount }: StatProps) {

  return (
    <Flex alignItems="center">
    <Box as="span" fontWeight="bold" mr="2">
      <FaBookReader />
    </Box>
    <Box as="span">{bookmarksCount}</Box>
  </Flex>
  );
}
