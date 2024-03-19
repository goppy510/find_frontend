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
  Input,
  Button,
  Checkbox,
  Stack,
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

interface CreatePermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (email: string, permissions: string[]) => void;
}

const CreatePermissionModal: React.FC<CreatePermissionModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [email, setEmail] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState<
    PermissionKey[]
  >([]);
  const [selectedPermissionsValues, setSelectedPermissionsValues] = useState<
    string[]
  >([]);

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
    const permissionsKeys = Object.keys(selectedPermissions);
    if (email !== '' && permissionsKeys.length > 0) {
      const permissionValues = permissionsKeys.map(
        (key) => permissionMap[key as PermissionKey]
      );
      onCreate(email, permissionValues);
      setEmail('');
      setSelectedPermissions([]);
      onClose();
    } else {
      // Handle error: Email is empty or no permissions selected
    }
  };

  const handlePermissionsChange = (permissions: PermissionKey[]) => {
    setSelectedPermissions(permissions);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>権限登録</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isRequired>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              placeholder="example@a.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl as="fieldset">
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
                    isDisabled={isDisabled} // ここでisDisabledを適用
                    onChange={(e) => {
                      setSelectedPermissions((prev) => ({
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
            登録
          </Button>
          <Button onClick={onClose}>キャンセル</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreatePermissionModal;
