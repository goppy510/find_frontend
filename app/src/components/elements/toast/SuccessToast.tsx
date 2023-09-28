import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

type SuccessToastProps = {
  message?: string;
  duration?: number;
}

const SuccessToast: React.FC<SuccessToastProps> = ({ message = "Success", duration = 2000 }) => {
  const toast = useToast();

  useEffect(() => {
    if (message) {
      toast({
        title: message,
        status: 'success',
        position: 'top-right',
        duration: duration,
        isClosable: true,
      });
    }
  }, [message, toast]);

  return null;  // 何もレンダリングしない
}

export default SuccessToast;
