import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

type SuccessToastProps = {
  message?: string;
}

const SuccessToast: React.FC<SuccessToastProps> = ({ message = "Success" }) => {
  const toast = useToast();

  useEffect(() => {
    if (message) {
      toast({
        title: message,
        status: 'success',
        position: 'top-right',
        isClosable: true,
      });
    }
  }, [message, toast]);

  return null;  // 何もレンダリングしない
}

export default SuccessToast;
