import React from 'react';
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  text: string;
};

export default function ExampleOutput({text}: Props) {
  const lines = text.split('\n');
  const height = `${2 + lines.length * 1.5}em`;

  return (
    <Box w={{ base: '100%' }} minH={{ base: height }} bg="gray.600" color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Box mx="auto">
          <Box fontSize="1xl" mb="4" mx="3">
            {lines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};  
