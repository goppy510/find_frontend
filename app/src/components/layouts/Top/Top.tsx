"use client";
import { Tag, TagLabel, Box } from "@chakra-ui/react";
import * as React from "react";
import { categories } from '@/const/category';

const Top = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      mt={5}
      maxWidth="100%"
    >
      {categories.map((category) => (
        <Box
          key={category}
          margin={3}
          flexShrink={0}
          cursor="pointer"
          // カテゴリごとに一覧表示にする
          onClick={() => console.log(`Clicked ${category}`)}
        >
          <Tag
            size="lg"
            key={category}
            variant="outline"
            color="gray.500"
            _hover={{ color: "teal.500", bg: "teal.50", cursor: "pointer" }}
            borderRadius='full'
            overflow="hidden"
            fontWeight="bold"
          >
            <TagLabel fontSize="md">{category}</TagLabel>
          </Tag>
        </Box>
      ))}
    </Box>
  );
};

export default Top;
