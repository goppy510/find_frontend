import {
  Box,
  Heading
} from "@/features/components";

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {

  return (
    <Box
      overflow="hidden"
      display="-webkit-box"
      style={{
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical"
      }}
    >
      <Heading size="md" isTruncated>{title}</Heading>
    </Box>
  );
}
