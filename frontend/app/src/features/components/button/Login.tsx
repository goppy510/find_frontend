"use client";
import { Button } from "@/features/components";
import { useSession, signIn, signOut } from "next-auth/react";
import { FC } from "react";

const LoginButton: FC = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <Button
        fontSize="sm"
        fontWeight={600}
        color="black"
        bg="gray.200"
        _hover={{
          bg: "gray.300",
        }}
        onClick={() => signOut()}
      >
        ログアウト
      </Button>
    );
  } else {
    return (
      <Button
        fontSize="sm"
        fontWeight={600}
        color="black"
        bg="gray.200"
        _hover={{
          bg: "gray.300",
        }}
        onClick={() => signIn()}
      >
        ログイン
      </Button>
    );
  }
}

export default LoginButton;
