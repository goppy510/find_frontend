// @ts-nocheck
// use client
import {
  Box,
  Flex,
  Heading,
  Text
} from "@/features/components";
import CategoryIcon from "@/features/components/CategoryIcon";
import { Post } from "@/features/post/types/post_types";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" margin={5} width="350px" >
      <Box as="a" href={`/posts/${post.id}`} cursor="pointer">
          <Box position="relative" width="100%" height="200px">
            <CategoryIcon category={post.category} />
          </Box>
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
              {post.description}
            </Text>
          </Box>
      </Box>
    </Box>
  );
}