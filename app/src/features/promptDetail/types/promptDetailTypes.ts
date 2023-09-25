// プロンプトの詳細画面の型定義
export interface PromptDetailType {
  id: number;
  prompt_uuid: string;
  category: string;
  about: string;
  input_example: string;
  output_example: string;
  prompt: string;
  generative_ai_model: string;
  nickname: string;
  likes_count: number;
  bookmarks_count: number;
  updated_at: string;
}

export interface PromptId {
  id: number;
}

export interface PromptUuid {
  prompt_uuid: string;
}
