export interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  // その他の投稿データのプロパティ
}

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
  thumbnailUrl: string;
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
