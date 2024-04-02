'use client';
import React from "react";
import { Box } from "@chakra-ui/react";
import PromptDetail from "@/features/promptDetail/components/PromptDetail";
import { PromptUuid } from "@/features/promptDetail/types/promptDetailTypes";

export default function PromptPage({ params }: { params: { promptUuid: PromptUuid } }) {
  
  return (
    <Box>
      <PromptDetail promptUuid={ params.promptUuid } />
    </Box>
  );
}
