import { Box, Container, Heading, Stack, HStack, Button, FormControl, FormLabel, Input, Checkbox, Divider } from "@/features/components";
import NextLink from "next/link";

export default function SignupWindow() {
  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
    <Stack spacing="8">
      <Stack spacing="6">
        {/* <Logo /> */}
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={{ base: 'xs', md: 'sm' }}>新規会員登録する</Heading>
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg-surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            {/* 表示名 */}
            <FormControl>
              <FormLabel htmlFor="display_name">表示名</FormLabel>
              <Input id="display_name" type="text" />
            </FormControl>

            {/* アカウントID */}
            <FormControl>
              <FormLabel htmlFor="acount_id">アカウントID</FormLabel>
              <Input id="acount_id" type="acount_id" />
            </FormControl>

            {/* メールアドレス */}
            <FormControl>
              <FormLabel htmlFor="email">メールアドレス</FormLabel>
              <Input id="email" type="email" />
            </FormControl>

            {/* パスワード */}
            <FormControl>
              <FormLabel htmlFor="email">パスワード（半角記号英数字）</FormLabel>
              <Input id="password" type="password" />
            </FormControl>

            {/* パスワード確認用 */}
            <FormControl>
              <FormLabel htmlFor="email">パスワード確認用</FormLabel>
              <Input id="password_confirm" type="password" />
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox>利用規約に同意する</Checkbox>
          </HStack>
          <Stack spacing="6">
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
            >登録する（無料）</Button>
            {/* <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            OAuthButtonGroup */}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
  );
}
