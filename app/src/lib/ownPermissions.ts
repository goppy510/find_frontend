import { UserPermission } from '@/types/home/permissionTypes';

export const hasAdmin = (permissions: UserPermission[]) => {
  if (permissions) {
    if (
      permissions.map((permission) => permission.toString()).includes('admin')
    ) {
      return true;
    }
  }
  return false;
};

export const hasContract = (permissions: UserPermission[]) => {
  if (permissions) {
    if (
      permissions
        .map((permission) => permission.toString())
        .includes('contract')
    ) {
      return true;
    }
  }
  return false;
};

export const hasUser = (permissions: UserPermission[]) => {
  if (permissions) {
    if (
      permissions.map((permission) => permission.toString()).includes('user')
    ) {
      return true;
    }
  }
  return false;
};

export const hasPermission = (permissions: UserPermission[]) => {
  if (permissions) {
    if (
      permissions
        .map((permission) => permission.toString())
        .includes('permission')
    ) {
      return true;
    }
  }
  return false;
};

export const hasCreatePrompt = (permissions: UserPermission[]) => {
  if (permissions) {
    if (
      permissions
        .map((permission) => permission.toString())
        .includes('create_prompt')
    ) {
      return true;
    }
  }
  return false;
};

export const hasReadPrompt = (permissions: UserPermission[]) => {
  if (permissions) {
    if (
      permissions
        .map((permission) => permission.toString())
        .includes('read_prompt')
    ) {
      return true;
    }
  }
  return false;
};

export const hasUpdatePrompt = (permissions: UserPermission[]) => {
  if (permissions) {
    if (
      permissions
        .map((permission) => permission.toString())
        .includes('update_prompt')
    ) {
      return true;
    }
  }
  return false;
};

export const hasDestroyPrompt = (permissions: UserPermission[]) => {
  if (permissions) {
    if (
      permissions
        .map((permission) => permission.toString())
        .includes('destroy_prompt')
    ) {
      return true;
    }
  }
  return false;
};
