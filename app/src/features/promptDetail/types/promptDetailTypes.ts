// プロンプトの詳細画面の型定義
export interface PromptDetailType {
  id: number;
  promptUuid: string;
  category: string;
  description: string;
  title: string;
  inputExample: string;
  outputExample: string;
  prompt: string;
  generativeAiModel: string;
  nickname: string;
  likesCount: number;
  bookmarksCount: number;
  updatedAt: string;
}

export interface PromptId {
  id: number;
}

export interface PromptUuid {
  prompt_uuid: string;
}
