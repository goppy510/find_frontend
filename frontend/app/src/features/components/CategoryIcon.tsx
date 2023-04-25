import { Icon, Box } from "@/features/components";
import {
  FaLaptopCode,
  FaChartBar,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileWord,
  FaEnvelope,
  FaRegFileAlt,
  FaRegComments,
  FaCalculator,
  FaBusinessTime,
  FaUsers,
  FaBalanceScaleRight,
  FaGraduationCap,
  FaClipboardCheck,
  FaNewspaper,
  FaQuestion
} from "react-icons/fa";
import * as React from 'react';

type CategoryIcons = {
  [category: string]: { icon: JSX.Element; bg: string };
}

const categoryIcons: CategoryIcons = {
  "IT": { icon: <FaLaptopCode style={{ width: 60, height: 60 }} />, bg: "purple.300" },
  "株・投資": { icon: <FaChartBar style={{ width: 60, height: 60 }}/>, bg: "teal.300" },
  "エクセル・スプレッドシート": { icon: <FaFileExcel style={{ width: 60, height: 60 }} />, bg: "green.300" },
  "パワーポイント・スライド": { icon: <FaFilePowerpoint style={{ width: 60, height: 60 }} />, bg: "yellow.300" },
  "ワード・ドキュメント": { icon: <FaFileWord style={{ width: 60, height: 60 }} />, bg: "blue.300" },
  "メール": { icon: <FaEnvelope style={{ width: 60, height: 60 }} />, bg: "orange.300" },
  "文書": { icon: <FaRegFileAlt style={{ width: 60, height: 60 }} />, bg: "gray.300" },
  "コミュニケーション": { icon: <FaRegComments style={{ width: 60, height: 60 }} />, bg: "pink.300" },
  "会計・経理・税務": { icon: <FaCalculator style={{ width: 60, height: 60 }} />, bg: "red.300" },
  "効率・時短": { icon: <FaBusinessTime style={{ width: 60, height: 60 }} />, bg: "blue.400" },
  "マネジメント": { icon: <FaUsers style={{ width: 60, height: 60 }} />, bg: "cyan.300" },
  "法務": { icon: <FaBalanceScaleRight style={{ width: 60, height: 60 }} />, bg: "gray.700" },
  "教育": { icon: <FaGraduationCap style={{ width: 60, height: 60 }} />, bg: "purple.400" },
  "マーケティング": { icon: <FaClipboardCheck style={{ width: 60, height: 60 }} />, bg: "teal.400" },
  "時事": { icon: <FaNewspaper style={{ width: 60, height: 60 }} />, bg: "orange.400" },
  "その他": { icon: <FaQuestion style={{ width: 60, height: 60 }} />, bg: "yellow.400" }
};
export default function CategoryIcon({ category }: { category: string }): JSX.Element {
  const { icon, bg } = categoryIcons[category] ?? { icon: <Icon />, bg: "gray.500" };
  // カテゴリに対応するアイコンと背景色が存在しない場合は、デフォルトのアイコンと色を使用する
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
      {icon}
    </Box>
  );
}
