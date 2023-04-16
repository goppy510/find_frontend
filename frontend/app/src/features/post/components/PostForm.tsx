"use client"; // appディレクトリはSSRなのでクライアントコンポーネントにするには最上部にこの宣言が必要
import { useState } from 'react';
import {
  Box,
  Heading,
  Container,
  Stack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Button,
  Select,
  Textarea,
  FormHelperText
} from "@/features/components";
// @ts-nocheck
// use client
import { Post } from "@/features/post/types/post_types";


export default function PostForm() {
  const MAX_TITLE_LENGTH = 50;
  const MAX_DESCRIPTION_LENGTH = 500;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (value.length <= MAX_TITLE_LENGTH) {
      setTitle(value);
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (value.length <= MAX_DESCRIPTION_LENGTH) {
      setDescription(value);
    }
  };

  return (
    <Container w="5xl">
      <Stack spacing="8">
        <Stack spacing="6">
          {/* <Logo /> */}
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'sm' }}>プロンプトを作成する</Heading>
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
              {/* モデル */}
              <FormControl>
                <FormLabel htmlFor="display_name">モデル</FormLabel>
                <Select placeholder='モデルを選択してください'>
                  <option value='option1'>ChatGPT-3.5</option>
                  <option value='option2'>ChatGPT-4</option>
                </Select>
              </FormControl>

              {/* タイトル */}
              <FormControl>
                <FormLabel htmlFor="title">タイトル</FormLabel>
                <Textarea id="title" value={title} onChange={handleTitleChange} maxLength={MAX_TITLE_LENGTH}/>
                <FormHelperText>
                  {title.length}/{MAX_TITLE_LENGTH}
                </FormHelperText>
              </FormControl>

              {/* 概要欄 */}
              <FormControl>
                <FormLabel htmlFor="description">概要欄</FormLabel>
                <Textarea id="description" value={description} onChange={handleDescriptionChange} maxLength={MAX_DESCRIPTION_LENGTH}/>
                <FormHelperText>
                  {description.length}/{MAX_DESCRIPTION_LENGTH}
                </FormHelperText>
              </FormControl>

              {/* プロンプト */}
              <FormControl>
                <FormLabel htmlFor="prompt">プロンプト</FormLabel>
                <Textarea id="prompt" />
              </FormControl>

              {/* 入力例 */}
              <FormControl>
                <FormLabel htmlFor="exapmleInput">入力例（具体的な値などを入れてください）</FormLabel>
                <Textarea id="exapmleInput" placeholder="[分野]:医療, [色]: 白" />
              </FormControl>

              {/* 出力例 */}
              <FormControl>
                <FormLabel htmlFor="exapmleOutput">出力例（ChatGPTが回答した内容を書いてください）</FormLabel>
                <Textarea id="exapmleOutput" />
              </FormControl>

              {/* 価格 */}
              <FormControl>
                <FormLabel htmlFor="display_name">価格</FormLabel>
                <Select placeholder='100円'>
                  <option value='option1'>200円</option>
                  <option value='option1'>300円</option>
                  <option value='option1'>400円</option>
                  <option value='option1'>500円</option>
                  <option value='option1'>600円</option>
                </Select>
              </FormControl>
            </Stack>
            <Stack spacing="6">
              <Button
                fontSize="sm"
                fontWeight={600}
                color="white"
                bg="messenger.400"
                _hover={{
                  bg: "messenger.500",
                }}
              >確認画面へ</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
