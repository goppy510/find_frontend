import { Button } from "@/features/components";
import NextLink from "next/link";

export default function SignUpButton() {
  return (
    <Button
      as={NextLink}
      fontSize="sm"
      fontWeight={600}
      color="white"
      bg="messenger.400"
      href="/signup"
      _hover={{
        bg: "messenger.500",
      }}
    >
      新規登録
    </Button>
  );
}
