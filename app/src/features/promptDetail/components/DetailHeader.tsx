'use client';
import { PromptDetailType } from "@/features/promptDetail/types/promptDetailTypes";
import {
  Box,
  Flex,
  Divider
} from "@chakra-ui/react";
import {
  ReadButton,
  Creator,
  Title,
  BookmarksCount,
  LikesCount,
  GenerativeAiModel
} from "./index"

export default function DetailHeader({
  id,
  promptUuid,
  category,
  title,
  about,
  nickname,
  inputExample,
  outputExample,
  prompt,
  likesCount,
  bookmarksCount,
  generativeAiModel,
  updatedAt
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
        <Box w={{ base: '100%', md: '50%'}} >
          <Flex justifyContent="center" alignItems="center" my="1">
            <Box>
              <Flex alignItems="center">
                <Box as="span" fontWeight="bold" mr="2">
                  <ReadButton />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Divider borderColor="gray.300" />
    </Box>
  );
}