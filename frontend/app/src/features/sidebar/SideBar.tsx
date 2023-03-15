import { Box } from "@/features/components";

type Props = {
  children: React.ReactNode;
};

export default function SideBar({ children }: Props) {
  return (
    <Box bg="white" p="4" display={{ base: "block", xl: "block" }}>
      {children}
    </Box>
  );
}
