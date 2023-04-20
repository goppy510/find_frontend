import { Container } from  "@/features/components";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container as="main">
      {children}
    </Container>
  );
}
