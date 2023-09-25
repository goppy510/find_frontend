// 詳細画面
export interface PostDetail {
  id: number;
  accountName: string;
  accountLink: string;
  avatar: string;
  title: string;
  description: string;
  exampleInput: string;
  exampleOutput: string;
  category: string;
  likes: number;
  views: number;
  rating: number;
  memberViews: number;
  model: string;
}

export interface PostId {
  id: number;
}

// 投稿・確認用
export interface FormData {
  model: string;
  title: string;
  description: string;
  prompt: string;
  exampleInput: string;
  exampleOutput: string;
}

// ヘッダーコンポーネント用
export interface Header {
  accountName: string;
  accountLink: string;
  avatar: string;
  title: string;
  likes: number;
  views: number;
  rating: number;
  memberViews: number;
  model: string;
}
