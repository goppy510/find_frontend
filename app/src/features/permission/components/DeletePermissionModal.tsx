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
} from '@chakra-ui/react';
import {
  permissionMap,
  PermissionKey,
} from '@/features/permission/types/permissionTypes';

interface EditPermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: (permissions: string[]) => void;
}

const EditPermissionModal: React.FC<EditPermissionModalProps> = ({
  isOpen,
  onClose,
  onEdit,
}) => {
  const [selectedPermissions, setSelectedPermissions] = useState<
    PermissionKey[]
  >([]);
  const [isFill, setIsFill] = useState(false);

  const handleSubmit = () => {
    onEdit(selectedPermissions);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>権限編集</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isRequired>
            <FormLabel>最大契約メンバー数</FormLabel>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              {Object.entries(permissionMap).map(([key, value]) => (
                <Checkbox key={value} value={key}>
                  {key} {/* 表示は日本語のラベル */}
                </Checkbox>
              ))}
            </Stack>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleSubmit}
            isDisabled={!isFill}
          >
            更新
          </Button>
          <Button onClick={onClose}>キャンセル</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditPermissionModal;
