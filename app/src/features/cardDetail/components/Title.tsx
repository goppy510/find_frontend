import React from 'react';
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <Flex justifyContent="space-between" alignItems="center" py="8" my="5">
      <Box mx="auto">
        <Box as="h1" fontSize="3xl" fontWeight="bold" mb="4">
          {title}
        </Box>
      </Box>
    </Flex>
  );
}
