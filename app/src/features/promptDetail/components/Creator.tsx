import React from 'react';
import { Box } from "@chakra-ui/react";
import { CreatorType } from "@/features/promptDetail/types/creatorTypes";

export default function Creator({ userLink, nickname }: CreatorType) {
  return (
    <Box as="a" href={userLink} display="flex" alignItems="center">
      <Box w="32px" h="32px" borderRadius="50%" overflow="hidden">
        <Box as="img" src="" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box ml="2">
        <Box as="span" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
          {nickname}
        </Box>
      </Box>
    </Box>
  );
}
