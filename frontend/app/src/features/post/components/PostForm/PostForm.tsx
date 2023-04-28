"use client"; // appディレクトリはSSRなのでクライアントコンポーネントにするには最上部にこの宣言が必要
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import {
  Box,
  Heading,
  Container,
  Stack,
  FormControl,
  FormLabel,
  Button,
  Select,
  Textarea,
  FormHelperText,
  FormErrorMessage
} from "@/features/components";
import { FormData } from "@/features/post/types/post-types";
import Confirmation from "@/features/post/components/PostForm/PostConfirmation";

const INITIAL_FORM_DATA: FormData = {
  model: "",
  title: "",
  description: "",
  prompt: "",
  exampleInput: "",
  exampleOutput: ""
};


export default function PostForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>()

  const [showConfirmation, setShowConfirmation] = useState(false);


  // gptモデル
  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      model: value,
    }));
  };

  // modelバリデーション
  const modelRegister = register('model');

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>, maxLength: number, field: string) => {
    const value = event.target.value;
    if (value.length <= maxLength) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: value,
      }));
    }
  };

  // title文字数チェック
  const MAX_TITLE_LENGTH = 50;
  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextChange(event, MAX_TITLE_LENGTH, 'title');

  // titleバリデーション
  const titleRegister = register('title', {
    required: '必須項目です',
    maxLength: { value: MAX_TITLE_LENGTH, message: `${MAX_TITLE_LENGTH}文字以下で入力してください` }
  });

  // description文字数チェック
  const MAX_DESCRIPTION_LENGTH = 500;
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextChange(event, MAX_DESCRIPTION_LENGTH, 'description');

  // descriptionバリデーション
  const descriptionRegister = register('description', {
    required: '必須項目です',
    maxLength: { value: MAX_DESCRIPTION_LENGTH, message: `${MAX_DESCRIPTION_LENGTH}文字以下で入力してください` }
  });

  // prompt文字数チェック
  const MAX_PROMPT_LENGTH = 2048;
  const handlePromptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextChange(event, MAX_PROMPT_LENGTH, 'prompt');

  // promptバリデーション
  const promptRegister = register('prompt', {
    required: '必須項目です',
    maxLength: { value: MAX_PROMPT_LENGTH, message: `${MAX_PROMPT_LENGTH}文字以下で入力してください` }
  });

  // 入力例文字数チェック
  const MAX_EXAMPLE_INPUT_LENGTH = 100;
  const handleExampleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextChange(event, MAX_EXAMPLE_INPUT_LENGTH, 'exampleInput');

  // exampleInputバリデーション
  const exampleInputRegister = register('exampleInput', {
    maxLength: { value: MAX_EXAMPLE_INPUT_LENGTH, message: `${MAX_EXAMPLE_INPUT_LENGTH}文字以下で入力してください` }
  });

  // 出力例文字数チェック
  const MAX_EXAMPLE_OUTPUT_LENGTH = 2048;
  const handleExampleOutputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextChange(event, MAX_EXAMPLE_OUTPUT_LENGTH, 'exampleOutput');

  // 出力例文字数チェック
  const exampleOutputRegister = register('exampleOutput', {
    required: '必須項目です',
    maxLength: { value: MAX_EXAMPLE_OUTPUT_LENGTH, message: `${MAX_EXAMPLE_OUTPUT_LENGTH}文字以下で入力してください` }
  });


  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setFormData(data);
    setShowConfirmation(true);
  });

  // 初期化
  const resetFormData = () => {
    setFormData(INITIAL_FORM_DATA);
  };

  // 戻るボタン（子コンポーネントにバインドしていて、そっちで実行される）
  const handleBackButtonClick = () => {
    setShowConfirmation(false);
  };


  // 投稿ボタン（子コンポーネントにバインドしていて、そっちで実行される）
  const router = useRouter();
  const handleSubmitButtonClick = () => {
    console.log(formData);
    // フォーム送信が成功した場合、投稿一覧ページに遷移する
    router.push("/");
    resetFormData(); // フォームデータを初期化する
  };

  if (showConfirmation) {
    return (
      <Confirmation
        formData={formData}
        onBackButtonClick={handleBackButtonClick}
        onSubmitButtonClick={handleSubmitButtonClick}
      />
    );
  }

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
          <form onSubmit={onSubmit}>
            <Stack spacing="6">
              <Stack spacing="5">
                {/* モデル */}
                <FormControl>
                  <FormLabel htmlFor="displayName">モデル</FormLabel>
                  <Select
                    id="model"
                    {...modelRegister}
                    value={formData.model}
                    onChange={handleModelChange}
                  >
                    <option value='ChatGPT-3.5' selected>ChatGPT-3.5</option>
                    <option value='ChatGPT-4'>ChatGPT-4</option>
                  </Select>
                </FormControl>

                {/* タイトル */}
                <FormControl isInvalid={Boolean(errors.title)}>
                  <FormLabel htmlFor="title">タイトル</FormLabel>
                  <Textarea
                    id="title"
                    {...titleRegister}
                    value={formData.title}
                    onChange={handleTitleChange}
                  />
                  <FormErrorMessage>
                    {errors.title && errors.title.message}
                  </FormErrorMessage>
                  <FormHelperText>
                    {formData.title.length}/{MAX_TITLE_LENGTH}
                  </FormHelperText>
                </FormControl>

                {/* 概要欄 */}
                <FormControl isInvalid={Boolean(errors.description)}>
                  <FormLabel htmlFor="description">概要欄</FormLabel>
                  <Textarea
                    id="description"
                    {...descriptionRegister}
                    value={formData.description}
                    onChange={handleDescriptionChange}
                  />
                  <FormErrorMessage>
                    {errors.description && errors.description.message}
                  </FormErrorMessage>
                  <FormHelperText>
                    {formData.description.length}/{MAX_DESCRIPTION_LENGTH}
                  </FormHelperText>
                </FormControl>

                {/* プロンプト */}
                <FormControl isInvalid={Boolean(errors.prompt)}>
                  <FormLabel htmlFor="prompt">プロンプト</FormLabel>
                  <Textarea
                    id="prompt"
                    {...promptRegister}
                    value={formData.prompt}
                    onChange={handlePromptChange}
                  />
                  <FormErrorMessage>
                    {errors.prompt && errors.prompt.message}
                  </FormErrorMessage>
                  <FormHelperText>
                    {formData.prompt.length}/{MAX_PROMPT_LENGTH}
                  </FormHelperText>
                </FormControl>

                {/* 入力例 */}
                <FormControl>
                  <FormLabel htmlFor="exampleInput">入力例（具体的な値などを入れてください）</FormLabel>
                  <Textarea
                    id="exampleInput"
                    {...exampleInputRegister}
                    value={formData.exampleInput}
                    placeholder="[分野]:医療, [色]: 白"
                    onChange={handleExampleInputChange}
                  />
                  <FormHelperText>
                    {formData.exampleInput.length}/{MAX_EXAMPLE_INPUT_LENGTH}
                  </FormHelperText>
                </FormControl>

                {/* 出力例 */}
                <FormControl isInvalid={Boolean(errors.exampleOutput)}>
                  <FormLabel htmlFor="exampleOutput">出力例（ChatGPTが回答した内容を書いてください）</FormLabel>
                  <Textarea
                    id="exampleOutput"
                    {...exampleOutputRegister}
                    value={formData.exampleOutput}
                    onChange={handleExampleOutputChange}
                  />
                  <FormErrorMessage>
                    {errors.exampleOutput && errors.exampleOutput.message}
                  </FormErrorMessage>
                  <FormHelperText>
                    {formData.exampleOutput.length}/{MAX_EXAMPLE_OUTPUT_LENGTH}
                  </FormHelperText>
                </FormControl>
              </Stack>
              <Stack spacing="6">
                <Button
                  type="submit"
                  fontSize="sm"
                  fontWeight={600}
                  color="white"
                  bg="messenger.400"
                  _hover={{
                    bg: "messenger.500",
                  }}
                >入力内容を確認する</Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
}
