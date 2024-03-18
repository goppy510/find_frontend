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
  CheckboxGroup,
  Stack,
} from '@chakra-ui/react';
import {
  permissionMap,
  PermissionKey,
} from '@/features/permission/types/permissionTypes';

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

  const handleSubmit = () => {
    if (email !== '' && selectedPermissions.length > 0) {
      const permissionsForApi = selectedPermissions.map(
        (key) => permissionMap[key]
      );
      onCreate(email, selectedPermissions);
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

          <FormControl as="fieldset" isRequired>
            <FormLabel as="legend">権限</FormLabel>
            <CheckboxGroup
              colorScheme="green"
              value={selectedPermissions}
              onChange={(e) => handlePermissionsChange(e as PermissionKey[])}
            >
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                {Object.entries(permissionMap).map(([key, value]) => (
                  <Checkbox key={value} value={key}>
                    {key} {/* 表示は日本語のラベル */}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
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
