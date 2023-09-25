import { Box } from '@chakra-ui/react';
import { categoryIconDetails } from '@/const/categoryIcon';

export default function CategoryIconMapping({ category }: { category: string }): JSX.Element {
  const { icon: IconComponent, bg } = categoryIconDetails[category] ?? { icon: null, bg: "gray.500" };

  return (
    <Box
      bg={bg}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      width="100%"
      height="100%"
    >
      {IconComponent && <IconComponent style={{ width: 60, height: 60 }} />}
    </Box>
  );
}
