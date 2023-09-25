// ホーム画面の一覧
export interface PromptType {
  id: number;
  promptUuid: string;
  category: string;
  title: string;
  about: string;
  nickname: string;
  likesCount: number;
  bookmarksCount: number;
  updatedAt: string;
}
