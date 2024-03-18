// 一覧
export interface Permission {
  contract_id: number;
  user_id: number;
  email: string;
  permissions: string[];
}

export const permissionMap = {
  プロンプト読み取り: 'read_prompt',
  プロンプト作成: 'create_prompt',
  プロンプト更新: 'update_prompt',
  プロンプト削除: 'destroy_prompt',
  ユーザー作成: 'user',
  権限付与: 'permission',
};

// TypeScriptの型定義でマップのキーを制限
export type PermissionKey = keyof typeof permissionMap;
