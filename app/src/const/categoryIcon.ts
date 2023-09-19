import { CategoryIconDetails } from '@/types/categoryIcon';
import {
  FaTags,
  FaVolumeUp,
  FaLaptop,
  FaWarehouse,
  FaShopify,
  FaCity,
  FaUsers,
  FaRegComments,
} from 'react-icons/fa';

const details: CategoryIconDetails = {
  セールスプロモーション: { icon: FaTags, bg: 'yellow.300' },
  '広告・Web制作・マーケティング支援': { icon: FaVolumeUp, bg: 'teal.300' },
  Webサービス: { icon: FaLaptop, bg: 'green.300' },
  メーカー: { icon: FaWarehouse, bg: 'purple.300' },
  店舗運営: { icon: FaShopify, bg: 'blue.300' },
  不動産: { icon: FaCity, bg: 'orange.300' },
  人材: { icon: FaUsers, bg: 'pink.300' },
  その他: { icon: FaRegComments, bg: 'gray.300' },
};

export const categoryIconDetails = details;

export const categoryIcons = Object.keys(details) as string[];
