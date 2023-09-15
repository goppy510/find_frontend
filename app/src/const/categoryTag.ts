import { CategoryTagDetails } from '@/types/categoryTag';

const details: CategoryTagDetails = {
  セールスプロモーション: { colorScheme: 'yellow' },
  '広告・Web制作・マーケティング支援': { colorScheme: 'teal' },
  Webサービス: { colorScheme: 'green' },
  メーカー: { colorScheme: 'purple' },
  店舗運営: { colorScheme: 'blue' },
  不動産: { colorScheme: 'orange' },
  人材: { colorScheme: 'pink' },
  その他: { colorScheme: 'gray' },
};

export const categoryTagDetails = details;

export const categoryTags = Object.keys(details) as string[];
