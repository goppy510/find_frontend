import { PermissionKey } from '@/features/permission/types/permissionTypes';

// 社内用
export const adminAvailablePermissions: PermissionKey[] = [
  '管理者',
  '契約者',
  '権限',
  'ユーザー作成',
  'プロンプト閲覧',
  'プロンプト作成',
  'プロンプト更新',
  'プロンプト削除',
];

// 契約者用
export const contractAvailablePermissions: PermissionKey[] = [
  'ユーザー作成',
  '権限',
  'プロンプト閲覧',
  'プロンプト作成',
  'プロンプト更新',
  'プロンプト削除',
];

// 一般用
export const permissionAvailablePermissions: PermissionKey[] = [
  'プロンプト閲覧',
  'プロンプト作成',
  'プロンプト更新',
  'プロンプト削除',
];

// 一般用
export const usersAvailablePermissions: PermissionKey[] = ['ユーザー作成'];
