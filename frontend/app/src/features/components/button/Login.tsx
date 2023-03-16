import { Button } from "@/features/components";
import NextLink from "next/link";

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
