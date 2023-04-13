import { Container } from  "@/features/components";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container
      as="main"
      maxW="8xl"
      px={14}
      py={3}
      marginTop="60px"
    >
      {children}
    </Container>
  );
}
