'use client';
import { Box } from "@chakra-ui/react";
import CategoryTagMapping from "@/features/card/components/CategoryTagMapping";

type CategroyProps = {
  category: string;
};

export default function CategoryTag({ category }: CategroyProps) {

  return (
    <Box>
      <CategoryTagMapping category={category} />
    </Box>
  );
}
