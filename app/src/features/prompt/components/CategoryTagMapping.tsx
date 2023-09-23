import { Tag, TagLabel } from "@chakra-ui/react";
import * as React from 'react';
import { categoryTagDetails } from '@/const/categoryTag';

export default function CategoryTagMapping({ category, size = "md",}: { category: string; size?: "sm" | "md" | "lg"; }): JSX.Element {
  const { colorScheme } = categoryTagDetails[category] ?? { colorScheme: "gray" };

  return (
    <Tag
      size={size}
      key={category}
      variant="outline"
      colorScheme={colorScheme}
      borderRadius='full'
      overflow="hidden"
    >
      <TagLabel>{category}</TagLabel>
    </Tag>
  );
}
