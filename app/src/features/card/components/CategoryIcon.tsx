"use client";
import {
  Box
} from "@chakra-ui/react";
import CategoryIconMapping from "@/features/card/components/CategoryIconMapping";

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
