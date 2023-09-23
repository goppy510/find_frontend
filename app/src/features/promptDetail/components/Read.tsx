import React from 'react';
import { Button } from "@chakra-ui/react";

export default function ReadButton() {
  return (
    <Button
      size="lg"
      colorScheme="blue"
      _hover={{ bg: "blue.300" }}
      _active={{ bg: "blue.700" }}
      _focus={{ boxShadow: "none" }}
    >
      読む
    </Button>
  );
}
