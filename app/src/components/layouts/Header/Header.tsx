"use client";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  ButtonGroup
} from "@chakra-ui/react";
import NextLink from "next/link";

import LoginButton from "@/features/login/components/LoginButton";
import SignUpButton from "@/features/signup/components/SignupButton";

export default function Header() {
  return (
    <Box as="header" className="header" position="fixed" top={0} left={0} right={0} zIndex={999} >
      <Flex
        bg="white"
        color="gray.600"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
      >
        <Flex flex={1} justify="space-between" maxW="5xl" mx="auto">
          <Heading as="h1" size="lg">
            <NextLink href="/">PromptData</NextLink>
          </Heading>
          <Spacer />
          <ButtonGroup gap='2'>
            <LoginButton />
            <SignUpButton />
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
}
