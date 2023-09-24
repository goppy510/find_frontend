"use client"; // appディレクトリはSSRなのでクライアントコンポーネントにするには最上部にこの宣言が必要
import { useState } from 'react';
import { useForm, RegisterOptions } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import {
  Box,
  Heading,
  Container,
  Stack,
  Button
} from "@chakra-ui/react";
import {
  Model,
  Title,
  Description,
  Prompt,
  ExampleInput,
  ExampleOutput
} from "@/features/promptForm/components";
import { FormData } from "@/features/promptForm/types/postTypes";
import Confirmation from "@/features/promptForm/components/PromptConfirmation";
import InputExample from './InputExample';

const INITIAL_FORM_DATA: FormData = {
  model: "",
  title: "",
  description: "",
  prompt: "",
  inputExample: "",
  outputExample: ""
};


export default function CardForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>()

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleTextChange = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
    field: string,
    maxLength: number = Infinity
  ) => {
    const value = event.target.value;
    if (value.length <= maxLength) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: value,
      }));
    }
  };

  type FieldName = 'model' | 'title' | 'description' | 'prompt' | 'inputExample' | 'outputExample';

  const registerField = (
    fieldName: FieldName,
    isRequired: boolean = false,
    maxLength: number = Infinity
  ) => {
    const registerOptions: RegisterOptions = {};
  
    if (isRequired) {
      registerOptions.required = '必須項目です';
    }
  
    if (maxLength) {
      registerOptions.maxLength = {
        value: maxLength,
        message: `${maxLength}文字以下で入力してください`,
      };
    }
  
    return register(fieldName, registerOptions);
  };

  // gptモデル
  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => handleTextChange(event, 'model');

  // modelバリデーション
  const modelRegister = registerField('model');



  // title文字数チェック
  const MAX_TITLE_LENGTH = 50;
  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextChange(event, 'title', MAX_TITLE_LENGTH);

  // titleバリデーション
  const titleRegister = registerField('title', true, MAX_TITLE_LENGTH);

  // description文字数チェック
  const MAX_DESCRIPTION_LENGTH = 500;
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextChange(event, 'description', MAX_DESCRIPTION_LENGTH);

  // descriptionバリデーション
  const descriptionRegister = registerField('description', true, MAX_DESCRIPTION_LENGTH);

  // prompt文字数チェック
  const MAX_PROMPT_LENGTH = 2048;
  const handlePromptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextChange(event, 'prompt', MAX_PROMPT_LENGTH);

  // promptバリデーション
  const promptRegister = registerField('prompt', true, MAX_PROMPT_LENGTH);

  // 入力例文字数チェック
  const MAX_INPUT_EXAMPLE_LENGTH = 100;
  const handleInputExampleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextChange(event, 'inputExample', MAX_INPUT_EXAMPLE_LENGTH);

  // inputExampleバリデーション
  const inputExampleRegister = registerField('inputExample', true, MAX_INPUT_EXAMPLE_LENGTH);

  // 出力例文字数チェック
  const MAX_OUTPUT_EXAMPLE_LENGTH = 2048;
  const handleOutputExampleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => handleTextChange(event, 'outputExample', MAX_OUTPUT_EXAMPLE_LENGTH);

  // 出力例文字数チェック
  const outputExampleRegister = registerField('outputExample', true, MAX_OUTPUT_EXAMPLE_LENGTH);

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
                <Model
                  text={formData.model}
                  handleChange={handleModelChange}
                  register={modelRegister}
                />

                {/* タイトル */}
                <Title
                  text={formData.title}
                  errors={errors.title}
                  maxLength={MAX_TITLE_LENGTH}
                  handleChange={handleTitleChange}
                  register={titleRegister}
                />

                {/* 概要欄 */}
                <Description
                  text={formData.description}
                  errors={errors.description}
                  maxLength={MAX_DESCRIPTION_LENGTH}
                  handleChange={handleDescriptionChange}
                  register={descriptionRegister}
                />

                {/* プロンプト */}
                <Prompt
                  text={formData.prompt}
                  errors={errors.prompt}
                  maxLength={MAX_PROMPT_LENGTH}
                  handleChange={handlePromptChange}
                  register={promptRegister}
                />

                {/* 入力例 */}
                <ExampleInput
                  text={formData.inputExample}
                  errors={errors.inputExample}
                  maxLength={MAX_INPUT_EXAMPLE_LENGTH}
                  handleChange={handleInputExampleChange}
                  register={inputExampleRegister}
                />

                {/* 出力例 */}
                <ExampleOutput
                  text={formData.outputExample}
                  errors={errors.outputExample}
                  maxLength={MAX_OUTPUT_EXAMPLE_LENGTH}
                  handleChange={handleOutputExampleChange}
                  register={outputExampleRegister}
                />

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
