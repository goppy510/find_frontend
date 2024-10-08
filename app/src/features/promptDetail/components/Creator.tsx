import React from 'react';
import { Box } from "@chakra-ui/react";

type Props = {
  avatar: string;
  accountLink: string;
  accountName: string;

};

export default function Creator({ avatar, accountLink, accountName }: Props) {
  return (
    <Box as="a" href={accountLink} display="flex" alignItems="center">
      <Box w="32px" h="32px" borderRadius="50%" overflow="hidden">
        <Box as="img" src={avatar} w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box ml="2">
        <Box as="span" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
          {accountName}
        </Box>
      </Box>
    </Box>
  );
}
