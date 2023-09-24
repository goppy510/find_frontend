"use client";
import {
  Box
} from "@chakra-ui/react";
import CategoryIconMapping from "@/features/prompt/components/CategoryIconMapping";

type CategroyProps = {
  category: string;
};

export default function CategoryIcon({ category }: CategroyProps) {

  return (
    <Box height="7em">
      <CategoryIconMapping category={category} />
    </Box>
  );
}
