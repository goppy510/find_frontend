"use client"; // appディレクトリはSSRなのでクライアントコンポーネントにするには最上部にこの宣言が必要
import {
  Box,
  Heading,
  Container,
  Stack,
  Button,
  Text
} from "@/features/components";
import { FormData } from "@/features/post/types/post-types";

type ConfirmationProps = {
  formData: FormData;
  onBackButtonClick: () => void;
  onSubmitButtonClick: () => void;
};


export default function Confirmation({
  formData,
  onBackButtonClick,
  onSubmitButtonClick,
}: ConfirmationProps) {

  // 戻るボタン
  const handleBackButtonClick = () => {
    onBackButtonClick(); // 親コンポーネントが渡してくれた戻るボタンのハンドラーを実行する
  };

  // 投稿ボタン
  const handleConfirmationSubmit = () => {
    onSubmitButtonClick(); // 親コンポーネントが渡してくれた戻るボタンのハンドラーを実行する
  };

  return (
    <Container w="5xl">
      <Stack spacing="8" align="center">
        <Stack spacing="6">
          {/* <Logo /> */}
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xl' }}>確認画面</Heading>
          </Stack>
        </Stack>
        <Box>
          <Box mb="6">
            <Text fontWeight="bold" mr="4" fontSize="lg">
              モデル:
            </Text>
            <Text>{formData.model}</Text>
          </Box>
          <Box mb="6">
            <Text fontWeight="bold" mr="4" fontSize="lg">
              タイトル:
            </Text>
            <Text>{formData.title}</Text>
          </Box>
          <Box mb="6">
            <Text fontWeight="bold" mr="4" fontSize="lg">
              概要欄:
            </Text>
            <Text>{formData.description}</Text>
          </Box>
          <Box mb="6">
            <Text fontWeight="bold" mr="4" fontSize="lg">
              プロンプト:
            </Text>
            <Text>{formData.prompt}</Text>
          </Box>
          <Box mb="6">
            <Text fontWeight="bold" mr="4" fontSize="lg">
              入力例:
            </Text>
            <Text>{formData.exampleInput}</Text>
          </Box>
          <Box mb="6">
            <Text fontWeight="bold" mr="4" fontSize="lg">
              出力例:
            </Text>
            <Text>{formData.exampleOutput}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Button
              type="submit"
              mx="10"
              fontSize="sm"
              fontWeight={600}
              color="white"
              bg="gray.400"
              _hover={{
                bg: "gray.500",
              }}
              onClick={handleBackButtonClick}>
              戻る
            </Button>
            <Button
              type="submit"
              mx="10"
              fontSize="sm"
              fontWeight={600}
              color="white"
              bg="messenger.400"
              _hover={{
                bg: "messenger.500",
              }}
              onClick={handleConfirmationSubmit}>
              投稿する
            </Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
