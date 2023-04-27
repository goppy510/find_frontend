"use client";
import { Tag, TagLabel, Box } from "@/features/components";
import * as React from "react";

const categories = [
  "IT",
  "株・投資",
  "エクセル・スプレッドシート",
  "パワーポイント・スライド",
  "ワード・ドキュメント",
  "メール",
  "文書",
  "コミュニケーション",
  "会計・経理・税務",
  "効率・時短",
  "マネジメント",
  "法務",
  "教育",
  "マーケティング",
  "時事",
  "その他",
];

const Top = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="flex-start"
      mt={5}
      maxWidth="100%"
    >
      {categories.map((category) => (
        <Box
          key={category}
          margin={1}
          flexShrink={0}
          cursor="pointer"
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
