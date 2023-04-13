export interface Post {
  id: number;
  title: string;
  body: string;
  category: string;
  thumbnailUrl: string;
  // その他の投稿データのプロパティ
}

export interface PostDetail {
  id: number;
  title: string;
  body: string;
  category: string;
  thumbnailUrl: string;
  // その他の投稿データのプロパティ
}

export interface PostId {
  id: number;
}
