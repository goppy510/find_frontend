"use client";
import {
  Box
} from "@/features/components";
import CommonCategoryIcon from "@/features/components/CategoryIcon";

type CategroyProps = {
  category: string;
};

export default function CategoryIcon({ category }: CategroyProps) {

  return (
    <Box height="120px">
      <CommonCategoryIcon category={category} />
    </Box>
  );
}
