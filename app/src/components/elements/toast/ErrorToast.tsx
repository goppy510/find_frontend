import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

type ErrorToastProps = {
  message?: string;
  duration?: number;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ message = "Error", duration = 2000 }) => {
  const toast = useToast();

  useEffect(() => {
    if (message) {
      toast({
        title: message,
        status: 'error',
        position: 'top-right',
        duration: duration,
        isClosable: true,
      });
    }
  }, [message, toast]);

  return null;  // 何もレンダリングしない
}

export default ErrorToast;
