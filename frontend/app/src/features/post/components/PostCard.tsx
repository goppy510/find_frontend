import { Box, Image, Flex, Heading, Text } from "@/features/components";
// @ts-nocheck
// use client
import { Post } from "@/features/post/types/post_types";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" margin={5} width="350px" >
      <Box as="a" href={`/posts/${post.id}`} cursor="pointer">
          <Image src={post.thumbnailUrl} alt={post.title} w="100%" h="200px" objectFit="cover" />
          <Box p="6">
            <Flex alignItems="baseline">
              <Text fontWeight="semibold" color="gray.600" fontSize="sm">
                {post.category}
              </Text>
            </Flex>

            <Flex mt="2" justify="space-between" align="center">
              <Heading size="md" isTruncated maxH="3em">
                {post.title}
              </Heading>
            </Flex>

            <Text mt="2" color="gray.600">
              {post.body}
            </Text>
          </Box>
      </Box>
    </Box>
  );
}
