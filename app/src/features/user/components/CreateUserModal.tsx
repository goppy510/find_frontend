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

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (email: string, password: string) => void;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFill, setIsFill] = useState(false);

  // 入力値または確認テキストが変わった時に一致をチェック
  useEffect(() => {
    if (email && password === confirmPassword) {
      setIsFill(true);
    } else {
      setIsFill(false);
    }
  }, [email, password, confirmPassword]);

  const handleSubmit = () => {
    if (password === confirmPassword) {
      onCreate(email, password);
      onClose();
    } else {
      // Handle error: passwords do not match or terms not agreed
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>メンバー作成</ModalHeader>
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

          <FormControl isRequired>
            <FormLabel>パスワード</FormLabel>
            <Input
              placeholder="P@ssw0rd"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>パスワード確認</FormLabel>
            <Input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            メンバー作成
          </Button>
          <Button onClick={onClose}>キャンセル</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateUserModal;
