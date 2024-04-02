import React from 'react';
import { Box } from '@chakra-ui/react';
import { CreatorType } from '@/features/promptDetail/types/creatorTypes';

export default function Creator({ userLink, nickname }: CreatorType) {
  return (
    <Box as="a" href={userLink} display="flex" alignItems="center">
      <Box ml="2">
        <Box
          as="span"
          fontWeight="bold"
          _hover={{ textDecoration: 'underline' }}
        >
          {nickname}
        </Box>
      </Box>
    </Box>
  );
}
