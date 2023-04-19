// ホーム画面の一覧
export interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
}

// 詳細画面
export interface PostDetail {
  id: number;
  creatorName: string;
  creatorLink: string;
  creatorIcon: string;
  title: string;
  description: string;
  exampleInput: string;
  exampleOutput: string;
  category: string;
  price: number;
  favorites: number;
  views: number;
  rating: number;
  sold: number;
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
