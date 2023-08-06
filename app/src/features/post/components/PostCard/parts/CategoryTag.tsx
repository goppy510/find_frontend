import {
  Box
} from "@/features/components";
import CommonCategoryTag from "@/features/components/CategoryTag";

type CategroyProps = {
  category: string;
};

export default function CategoryTag({ category }: CategroyProps) {

  return (
    <Box>
      <CommonCategoryTag category={category} />
    </Box>
  );
}
