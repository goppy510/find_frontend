import { CategoryIconDetails } from '@/types/categoryIcon';
import {
  FaWrench,
  FaStore,
  FaLaptopCode,
  FaBuilding,
  FaPeopleArrows,
  FaBullhorn,
  FaHandshake,
  FaEllipsisH,
} from 'react-icons/fa';

const details: CategoryIconDetails = {
  Webサービス: { icon: FaLaptopCode, bg: 'green.300' },
  不動産: { icon: FaBuilding, bg: 'orange.300' },
  メーカー: { icon: FaWrench, bg: 'blue.300' },
  店舗運営: { icon: FaStore, bg: 'purple.300' },
  人材: { icon: FaPeopleArrows, bg: 'pink.300' },
  '広告・Web制作・マーケティング支援': { icon: FaBullhorn, bg: 'teal.300' },
  セールスプロモーション: { icon: FaHandshake, bg: 'yellow.300' },
  その他: { icon: FaEllipsisH, bg: 'gray.300' },
};

export const categoryIconDetails = details;

export const categoryIcons = Object.keys(details) as string[];
