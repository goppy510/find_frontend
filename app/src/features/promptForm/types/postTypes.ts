import OutputExample from '../components/OutputExample';
// ホーム画面の一覧
export interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  likes: number;
  views: number;
  memberViews: number;
  accountName: string;
  avater: string;
}

// 詳細画面
export interface PostDetail {
  id: number;
  accountName: string;
  accountLink: string;
  avatar: string;
  title: string;
  description: string;
  inputExample: string;
  outputExample: string;
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
  category: string;
  description: string;
  prompt: string;
  input_example: string;
  output_example: string;
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
