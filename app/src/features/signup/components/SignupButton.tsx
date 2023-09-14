"use client";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

export default function SignUpButton() {
  return (
    <Button
      as={NextLink}
      fontSize="sm"
      fontWeight={600}
      color="white"
      bg="teal.500"
      href="/signup"
      _hover={{
        bg: "messenger.500",
      }}
    >
      無料会員登録
    </Button>
  );
}
