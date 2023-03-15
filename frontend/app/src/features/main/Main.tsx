import { Container } from  "@/features/components";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container
      as="main"
      maxW="5xl"
      px={4}
      py={8}
      marginTop="60px"
    >
      {children}
    </Container>
  );
}
