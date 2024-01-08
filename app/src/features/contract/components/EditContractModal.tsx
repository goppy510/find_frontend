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
} from '@chakra-ui/react';

interface EditContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: (maxMemberCount: string) => void;
  placeholder: string;
}

const EditContractModal: React.FC<EditContractModalProps> = ({
  isOpen,
  onClose,
  onEdit,
  placeholder,
}) => {
  const [maxMemberCount, setMaxMembers] = useState('');
  const [isFill, setIsFill] = useState(false);

  useEffect(() => {
    const numericMaxMembers = maxMemberCount ? parseInt(maxMemberCount, 10) : 0;
    if (numericMaxMembers > 0) {
      setIsFill(true);
    } else {
      setIsFill(false);
    }
  }, [maxMemberCount]); // 入力値または確認テキストが変わった時に一致をチェック

  const handleSubmit = () => {
    onEdit(maxMemberCount);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>契約編集</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl isRequired>
            <FormLabel>最大契約メンバー数</FormLabel>
            <Input
              placeholder={placeholder}
              type="number"
              value={maxMemberCount}
              onChange={(e) => setMaxMembers(e.target.value)}
            />
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

export default EditContractModal;
