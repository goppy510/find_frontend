'use client';
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
  title,
  nickname,
  likesCount,
  bookmarksCount,
  generativeAiModel
}: PromptDetailType) {
  return (
    <Box w={{ base: '100%' }} h={{ md: '30vh' }}>
      <Title title={title} />
      <Box display={{base: 'block', md: 'flex'}}>
        <Box w={{ base: '100%', md: '50%'}} >
          <Flex justifyContent="space-between" alignItems="center" my="5">
            <Creator userLink="" nickname={nickname} />
            <BookmarksCount bookmarksCount={bookmarksCount} />
            <LikesCount likesCount={likesCount} />
            <GenerativeAiModel generativeAiModel={generativeAiModel} />
          </Flex>
        </Box>
      </Box>
      <Divider borderColor="gray.300" />
    </Box>
  );
}