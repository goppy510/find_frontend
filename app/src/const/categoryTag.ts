import { CategoryTagDetails } from '@/types/categoryTag';

const details: CategoryTagDetails = {
  Webサービス: { colorScheme: 'green' },
  セールスプロモーション: { colorScheme: 'yellow' },
  不動産: { colorScheme: 'orange' },
  メーカー: { colorScheme: 'blue' },
  人材: { colorScheme: 'pink' },
  '広告・Web制作・マーケティング支援': { colorScheme: 'teal' },
  店舗運営: { colorScheme: 'purple' },
  その他: { colorScheme: 'gray' },
};

export const categoryTagDetails = details;

export const categoryTags = Object.keys(details) as string[];
