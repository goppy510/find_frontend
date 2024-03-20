import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Button,
  Checkbox,
  Stack,
  Input,
  Spacer,
} from '@chakra-ui/react';
import {
  permissionMap,
  PermissionKey,
} from '@/features/permission/types/permissionTypes';
import useFetchOwnPermissions from '@/hooks/useFetchOwnPermission';
import {
  hasAdmin,
  hasContract,
  hasUser,
  hasPermission,
} from '@/lib/ownPermissions';
import {
  adminAvailablePermissions,
  contractAvailablePermissions,
  usersAvailablePermissions,
  permissionAvailablePermissions,
} from '@/features/permission/const/availablePermissions';

interface EditPermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: (permissions: string[]) => void;
  email: string;
  selectedPermissions: string[];
}

const EditPermissionModal: React.FC<EditPermissionModalProps> = ({
  isOpen,
  onClose,
  onEdit,
  email,
  selectedPermissions,
}) => {
  const [checkedState, setCheckedState] = useState<{
    [key in PermissionKey]: boolean;
  }>(
    // 初期状態を設定
    {
      管理者: false,
      契約者: false,
      プロンプト閲覧: false,
      プロンプト作成: false,
      プロンプト更新: false,
      プロンプト削除: false,
      ユーザー作成: false,
      権限: false,
    }
  );

  const { permissions } = useFetchOwnPermissions();

  const availablePermissions = () => {
    if (hasAdmin(permissions)) {
      return adminAvailablePermissions;
    } else if (hasContract(permissions)) {
      return contractAvailablePermissions;
    } else if (hasPermission(permissions)) {
      return permissionAvailablePermissions;
    } else if (hasUser(permissions)) {
      return usersAvailablePermissions;
    } else {
      return [];
    }
  };

  const currentAvailablePermissions = availablePermissions();

  const handleSubmit = () => {
    const permissionsKeys = Object.entries(checkedState)
      .filter(([_, value]) => value === true)
      .map(([key, _]) => key);
    const permissionValues = permissionsKeys.map(
      (key) => permissionMap[key as PermissionKey]
    );
    onEdit(permissionValues);
    setCheckedState({} as { [key in PermissionKey]: boolean });
    onClose();
  };

  // 選択された権限をもとにcheckedStateを更新する
  useEffect(() => {
    const newState = Object.keys(permissionMap).reduce((acc, key) => {
      const permissionKey = key as PermissionKey;
      acc[permissionKey] = selectedPermissions.includes(permissionKey);
      return acc;
    }, {} as { [key in PermissionKey]: boolean });
    setCheckedState(newState);
  }, [selectedPermissions]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>権限編集</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              value={email}
              isReadOnly // メールアドレスは読み取り専用にする
            />
            <Spacer h={3} />
            <Stack spacing={[1, 6]} direction={['column']}>
              {Object.entries(permissionMap).map(([key, value]) => {
                // アクセス可能な権限かどうかに基づいて、チェックボックスを有効/無効に設定
                const isDisabled = !currentAvailablePermissions.includes(
                  key as PermissionKey
                );
                return (
                  <Checkbox
                    key={value}
                    isChecked={checkedState[key as PermissionKey]}
                    isDisabled={isDisabled} // ここでisDisabledを適用
                    onChange={(e) => {
                      setCheckedState((prev) => ({
                        ...prev,
                        [key]: e.target.checked,
                      }));
                    }}
                  >
                    {key} {/* 日本語のラベル */}
                  </Checkbox>
                );
              })}
            </Stack>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            更新
          </Button>
          <Button onClick={onClose}>キャンセル</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditPermissionModal;
