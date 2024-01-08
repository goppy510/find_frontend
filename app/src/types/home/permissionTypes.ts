export type UserPermission =
  | 'user'
  | 'contract'
  | 'permission'
  | 'create_prompt'
  | 'read_prompt'
  | 'update_prompt'
  | 'destroy_prompt';
export type PermissionsType = {
  permissions: UserPermission[];
};
