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
      mt="2"
      overflow="hidden"
      display="-webkit-box"
      style={{
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical"
      }}
      height="20px"
    >
      <Heading size="md" isTruncated height="20px">
        {title}
      </Heading>
    </Box>
  );
}
