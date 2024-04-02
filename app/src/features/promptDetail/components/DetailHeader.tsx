'use client';
import { useState } from "react";
import { PromptDetailType } from "@/features/promptDetail/types/promptDetailTypes";
import {
  Box,
  Flex,
  Divider
} from "@chakra-ui/react";
import {
  Creator,
  Title,
  BookmarksCount,
  LikesCount,
  GenerativeAiModel
} from "@/features/promptDetail/components";

export default function DetailHeader({
  id,
  title,
  nickname,
  likesCount: initialLikesCount,
  bookmarksCount: initialBookmarksCount,
  generativeAiModel
}: PromptDetailType) {
  const [likesCount, setLikesCount] = useState<number>(initialLikesCount);

  return (
    <Box w={{ base: '100%' }}>
      <Title title={title} />
      <Box display={{base: 'block', md: 'flex'}}>
        <Box w={{ base: '100%', md: '50%'}} >
          <Flex justifyContent="space-between" alignItems="center" my="5">
            <Creator userLink="" nickname={nickname} />
            <BookmarksCount promptId={id} />
            <LikesCount likesCount={likesCount} promptId={id} setLikesCount={setLikesCount} />
            <GenerativeAiModel generativeAiModel={generativeAiModel} />
          </Flex>
        </Box>
      </Box>
      <Divider borderColor="gray.300" />
    </Box>
  );
}
