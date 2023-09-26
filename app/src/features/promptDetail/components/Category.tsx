import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import CategoryIcon from "@/features/prompt/components/CategoryIcon";

type Props = {
  category: string;
};

export default function Category({category}: Props) {
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
