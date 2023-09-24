import {
  Box
} from "@chakra-ui/react";

type AboutProps = {
  about: string;
};

export default function About({ about }: AboutProps) {

  return (
    <Box
      mt="2"
      color="gray.600"
      overflow="hidden"
      display="-webkit-box"
      style={{
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical"
      }}
      height="3em"
    >
      {about}
    </Box>
  );
}
