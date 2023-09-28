import React from 'react';
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  text: string;
};

export default function About({text}: Props) {
  const lines = text.split('\n');
  const height = `${2 + lines.length * 1.5}em`;

  return (
    <Box
      w={{ base: '100%' }}
      minH={{ base: height }}
      bg="white.100"
      my={10}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Box fontSize="2xl" mb="4">
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
