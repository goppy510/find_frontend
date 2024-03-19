// 一覧
export interface Permission {
  contract_id: number;
  user_id: number;
  email: string;
  permissions: string[];
}

export const permissionMap = {
  管理者: 'admin',
  契約者: 'contract',
  権限: 'permission',
  プロンプト閲覧: 'read_prompt',
  プロンプト作成: 'create_prompt',
  プロンプト更新: 'update_prompt',
  プロンプト削除: 'destroy_prompt',
  ユーザー作成: 'user',
};

// TypeScriptの型定義でマップのキーを制限
export type PermissionKey = keyof typeof permissionMap;
export type PermissionValue = (typeof permissionMap)[PermissionKey];
