import React from 'react';
import { Box, Flex } from "@/features/components";
import CategoryIcon from "@/features/components/CategoryIcon";

type Props = {
  category: string;
};

export default function Thumbnail({category}: Props) {
  return (
    <Box w={{ base: '100%' }} h={{ md: '30vh' }}>
      <Flex justifyContent="center" alignItems="center" h="100%">
        <Box mx="auto" w="100%" h="100%">
          <CategoryIcon category={category} />
        </Box>
      </Flex>
    </Box>
  );
};
