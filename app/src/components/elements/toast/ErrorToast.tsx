import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

type ErrorToastProps = {
  message?: string;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ message = "Error" }) => {
  const toast = useToast();

  useEffect(() => {
    if (message) {
      toast({
        title: message,
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
    }
  }, [message, toast]);

  return null;  // 何もレンダリングしない
}

export default ErrorToast;
