import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  confirmText: string; // 削除確認時にマッチさせるべきテキスト
  placeholder: string; // インプットフィールドのプレースホルダー
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onDelete,
  confirmText,
  placeholder,
}) => {
  const [inputText, setInputText] = useState('');
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    setIsMatch(inputText === confirmText);
  }, [inputText, confirmText]); // 入力値または確認テキストが変わった時に一致をチェック

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>削除確認</ModalHeader>
        <ModalBody>
          <Text>{`削除する場合は、以下のテキストを入力してください：${confirmText}`}</Text>
          <Input
            mt={4}
            placeholder={placeholder}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            mr={3}
            onClick={onDelete}
            isDisabled={!isMatch} // テキストが一致していないときは非アクティブ
          >
            削除
          </Button>
          <Button variant="ghost" onClick={onClose}>
            キャンセル
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteConfirmationModal;
