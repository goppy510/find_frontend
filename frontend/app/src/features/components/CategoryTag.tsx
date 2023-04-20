import { Tag, TagLabel } from "@/features/components";
import * as React from 'react';

type CategoryTags = {
  [category: string]: { colorScheme: string };
};

const categoryTags: CategoryTags = {
  "IT": { colorScheme: "purple" },
  "株・投資": { colorScheme: "teal" },
  "エクセル・スプレッドシート": { colorScheme: "green" },
  "パワーポイント・スライド": { colorScheme: "yellow" },
  "ワード・ドキュメント": { colorScheme: "blue" },
  "メール": { colorScheme: "orange" },
  "文書": { colorScheme: "gray" },
  "コミュニケーション": { colorScheme: "pink" },
  "会計・経理・税務": { colorScheme: "red" },
  "効率・時短": { colorScheme: "indigo" },
  "マネジメント": { colorScheme: "cyan" },
  "法務": { colorScheme: "gray" },
  "教育": { colorScheme: "purple" },
  "マーケティング": { colorScheme: "teal" },
  "時事": { colorScheme: "orange" },
  "その他": { colorScheme: "yellow" },
};

export default function CategoryTag({
  category,
  size = "md",
}: {
  category: string;
  size?: "sm" | "md" | "lg";
}): JSX.Element {
  const { colorScheme } = categoryTags[category] ?? { colorScheme: "gray" };

  return (
    <Tag size={size} key={category} variant="outline" colorScheme={colorScheme}>
      <TagLabel>{category}</TagLabel>
    </Tag>
  );
}
