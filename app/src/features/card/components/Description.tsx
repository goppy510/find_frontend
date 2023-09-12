import {
  Box
} from "@chakra-ui/react";

type DescriptionProps = {
  description: string;
};

export default function Description({ description }: DescriptionProps) {

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
      {description}
    </Box>
  );
}
