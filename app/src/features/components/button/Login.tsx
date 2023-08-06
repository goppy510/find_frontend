"use client";
import { Button } from "@/features/components";
import { useSession, signIn, signOut } from "next-auth/react";
import { NextPage } from 'next';
import NextLink from "next/link";
import { useRouter } from "next/navigation";



export default function LoginButton() {
  return (
    <Button
      as={NextLink}
      fontSize="sm"
      fontWeight={600}
      color="black"
      bg="gray.200"
      href="/login"
      _hover={{
        bg: "gray.300",
      }}
    >
      ログイン
    </Button>
  );
}
