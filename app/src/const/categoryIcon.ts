import { CategoryIconDetails } from '@/types/categoryIcon';
import {
  FaBus,
  FaMoneyBillWave,
  FaLaptopCode,
  FaBuilding,
  FaHospital,
  FaBook,
  FaPlane,
  FaFilm,
  FaBullhorn,
  FaHandshake,
  FaEllipsisH,
} from 'react-icons/fa';

const details: CategoryIconDetails = {
  'IT・情報通信業': { icon: FaLaptopCode, bg: 'green.300' },
  '金融・保険業': { icon: FaMoneyBillWave, bg: 'yellow.300' },
  不動産業: { icon: FaBuilding, bg: 'orange.300' },
  '交通・運輸業': { icon: FaBus, bg: 'blue.300' }, // バスのアイコンを選択していますが、他の交通手段を主にする場合は変更してください。
  '医療・福祉': { icon: FaHospital, bg: 'pink.300' },
  '教育・学習支援業': { icon: FaBook, bg: 'teal.300' },
  '旅行・宿泊・飲食業': { icon: FaPlane, bg: 'purple.300' }, // 旅行を主として選択していますが、飲食を強調したい場合は変更してください。
  'エンターテインメント・マスコミ': { icon: FaFilm, bg: 'blue.300' },
  '広告・マーケティング': { icon: FaBullhorn, bg: 'teal.300' },
  コンサルティング業: { icon: FaHandshake, bg: 'gray.300' },
  その他: { icon: FaEllipsisH, bg: 'gray.300' },
};

export const categoryIconDetails = details;

export const categoryIcons = Object.keys(details) as string[];
