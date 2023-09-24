"use client";
import {
  Box,
  Grid,
  GridItem
} from "@chakra-ui/react";
import {
  CategoryIcon,
  CategoryTag,
  Title,
  About,
  BookmarksCount,
  LikesCount
} from "@/features/prompt/components";
import { PromptType } from "@/types/home/promptTypes";

type PromptProps = {
  prompt: PromptType;
};

export default function Prompt({ prompt }: PromptProps) {

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="100%"
      h="20em"
      boxShadow="xl"
      _hover={{ bg: "gray.100" }}
    >
      <Box as="a" href={`/prompts/${prompt.promptUuid}`} cursor="pointer">
        <Grid
          templateAreas={`
            "categoryIcon categoryIcon categoryIcon"
            "category category category"
            "title title title"
            "about about about"
            "bookmarksCount likes_count likes_count"
          `}
          templateRows="1fr 0.25fr 0.25fr 0.25fr 8.25fr"
          templateColumns="4fr 4fr 4fr"
        >
          <GridItem area="categoryIcon">
            <CategoryIcon category={prompt.category} />
          </GridItem>
          <GridItem area="category" my={3} mx={6}>
            <CategoryTag category={prompt.category} />
          </GridItem>
          <GridItem area="title" mx={6}>
            <Title title={prompt.title} />
          </GridItem>
          <GridItem area="about" my={3} mx={6}>
            <About about={prompt.about} />
          </GridItem>
          <GridItem area="bookmarksCount"my={2} mx={6}>
            <BookmarksCount bookmarksCount={prompt.bookmarksCount} />
          </GridItem>
          <GridItem area="likes_count" my={2} mx={6}>
            <LikesCount likesCount={prompt.likesCount} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
