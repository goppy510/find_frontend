'use client';
import { Box, Divider, Image, Button } from '@chakra-ui/react';
import { PromptUuid } from '@/features/promptDetail/types/promptDetailTypes';
import useFetchPromptDetail from '@/features/promptDetail/hooks/useFetchPromptDetail';
import ErrorToast from '@/components/elements/toast/ErrorToast';
import Loading from '@/components/elements/loading/Loading';
import ChakraNextImage from '@/components/elements/image/ChakraNextImage';
import {
  DetailHeader,
  Category,
  Description,
  InputExample,
  OutputExample,
  Prompt,
} from '@/features/promptDetail/components/';
import { hasAdmin, hasReadPrompt } from '@/lib/ownPermissions';
import useFetchOwnPermissions from '@/hooks/useFetchOwnPermission';

type Props = {
  promptUuid: PromptUuid;
};

export default function PromptDetail({ promptUuid }: Props) {
  const {
    promptDetail,
    errorMessage: promptDetailErrorMessage,
    isLoading: promptDetailIsLoading,
  } = useFetchPromptDetail(promptUuid);

  const { permissions } = useFetchOwnPermissions();

  if (promptDetailErrorMessage) {
    return <ErrorToast message={promptDetailErrorMessage} />;
  }

  if (promptDetailIsLoading) {
    return <Loading />;
  }

  if (hasReadPrompt(permissions) || hasAdmin(permissions)) {
    return (
      <Box minH="100vh" maxW="100%" m="0 auto">
        <Category category={promptDetail.category} />
        <DetailHeader
          id={promptDetail.id}
          promptUuid={promptDetail.promptUuid}
          category={promptDetail.category}
          title={promptDetail.title}
          description={promptDetail.description}
          inputExample={promptDetail.inputExample}
          outputExample={promptDetail.outputExample}
          prompt={promptDetail.prompt}
          nickname={promptDetail.nickname}
          bookmarksCount={promptDetail.bookmarksCount}
          likesCount={promptDetail.likesCount}
          generativeAiModel={promptDetail.generativeAiModel}
          updatedAt={promptDetail.updatedAt}
        />
        <Box as="h4" fontSize="2xl" fontWeight="bold" mb="4" mt="10">
          概要欄
        </Box>
        <Description text={promptDetail.description} />

        <Box as="h3" fontSize="2xl" fontWeight="bold" mb="4" my="5">
          入力例
        </Box>
        <InputExample text={promptDetail.inputExample} />

        <Box as="h3" fontSize="2xl" fontWeight="bold" mb="4" my="5">
          出力例
        </Box>
        <OutputExample text={promptDetail.outputExample} />

        <Box as="h3" fontSize="2xl" fontWeight="bold" mb="4" my="5">
          プロンプト
        </Box>
        <Prompt text={promptDetail.prompt} />
      </Box>
    );
  } else {
    return (
      <Box>
        <p>プロンプトを読むには閲覧権限が必要です</p>
      </Box>
    );
  }
}
