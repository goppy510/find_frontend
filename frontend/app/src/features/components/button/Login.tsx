"use client";
import { Button } from "@/features/components";
import { useSession, signIn, signOut } from "next-auth/react";
import { NextPage } from 'next';
import { useRouter } from "next/navigation";

const LoginButton: NextPage = () => {
  const { data: session } = useSession();

  const router = useRouter();

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
        onClick={async() => {
          await signOut({ redirect: false });
          router.push("/");
        }}
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
        onClick={async() => {
          await signIn();
        }}
      >
        ログイン
      </Button>
    );
  }
}

export default LoginButton;
