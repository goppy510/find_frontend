import React from 'react';
import { Box, Flex } from "@/features/components";

type Props = {
  text: string;
};

export default function ExampleInput({text}: Props) {
  const lines = text.split('\n');
  const height = `${2 + lines.length * 1.5}em`;

  return (
    <Box w={{ base: '100%' }} minH={{ base: height }} bg="blue.900" color="white">
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
