import { Container } from  "@/features/components";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container as="main" maxW="unset" px={0}>
      {children}
    </Container>
  );
}
