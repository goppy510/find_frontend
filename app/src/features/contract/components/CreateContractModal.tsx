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

interface CreateContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (email: string, password: string, maxMemberCount: string) => void;
}

const CreateContractModal: React.FC<CreateContractModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [maxMemberCount, setMaxMembers] = useState('');
  const [isFill, setIsFill] = useState(false);

  useEffect(() => {
    const numericMaxMembers = maxMemberCount ? parseInt(maxMemberCount, 10) : 0;
    if (email && password === confirmPassword && numericMaxMembers > 0) {
      setIsFill(true);
    } else {
      setIsFill(false);
    }
  }, [email, password, confirmPassword, maxMemberCount]); // 入力値または確認テキストが変わった時に一致をチェック

  const handleSubmit = () => {
    if (password === confirmPassword) {
      onCreate(email, password, maxMemberCount);
      onClose();
    } else {
      // Handle error: passwords do not match or terms not agreed
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>契約作成</ModalHeader>
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

          <FormControl isRequired>
            <FormLabel>最大契約メンバー数</FormLabel>
            <Input
              placeholder="5"
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
            契約作成
          </Button>
          <Button onClick={onClose}>キャンセル</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateContractModal;
