"use client";
import { useState } from "react";
import { Grid, GridItem, Flex } from "@chakra-ui/react";
import Prompt from "@/features/prompt/components/Prompt";
import Pagination from "@/components/elements/pagination/components/Pagination";
import { PromptSkeleton } from "@/features/prompt/components/PromptSkeleton";
import useFetchPromptPerPage from "@/hooks/useFetchPromptPerPage";

const SKELETON_COUNT = 6;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { prompts, totalCount, errorMessage, isLoading } = useFetchPromptPerPage(currentPage);

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={5}
    >
      {isLoading ? (
        Array(SKELETON_COUNT).fill(null).map((_, idx) => (
          <GridItem key={idx}>
            <PromptSkeleton />
          </GridItem>
        ))
      ) : (
        prompts.map((prompt) => (
          <GridItem key={prompt.id}>
            <Prompt prompt={prompt} />
          </GridItem>
        ))
      )}
      {/* ページネーションを右寄せのためのGridItem */}
      <GridItem colSpan={{ base: 1, sm: 2, md: 3 }}>
        <Flex justifyContent="flex-end">
          <Pagination
            itemsPerPage={SKELETON_COUNT}
            currentPage={currentPage}
            hasPrevious={currentPage > 1}
            hasNext={currentPage < 2}
            totalCount={totalCount}
            onChangePage={(newPage) => setCurrentPage(newPage)}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
}