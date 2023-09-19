import { Container } from  "@chakra-ui/react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container as="main" maxW="unset" px={10}>
      {children}
    </Container>
  );
}
