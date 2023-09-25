import { CategoryTagDetails } from '@/types/categoryTag';

const details: CategoryTagDetails = {
  'IT・情報通信業': { colorScheme: 'green' },
  '金融・保険業': { colorScheme: 'yellow' },
  不動産業: { colorScheme: 'orange' },
  '交通・運輸業': { colorScheme: 'blue' },
  '医療・福祉': { colorScheme: 'pink' },
  '教育・学習支援業': { colorScheme: 'teal' },
  '旅行・宿泊・飲食業': { colorScheme: 'purple' },
  'エンターテインメント・マスコミ': { colorScheme: 'blue' }, // 前回の"店舗運営"と同じ色ですが、異なる色を希望する場合は変更してください。
  '広告・マーケティング': { colorScheme: 'teal' }, // 一致するものを選びました。
  コンサルティング業: { colorScheme: 'gray' }, // 一般的な業種なのでgrayを選択しました。変更しても問題ありません。
  その他: { colorScheme: 'gray' },
};

export const categoryTagDetails = details;

export const categoryTags = Object.keys(details) as string[];
