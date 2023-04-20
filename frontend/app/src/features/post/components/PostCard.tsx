// @ts-nocheck
// use client
import {
  Box,
  Flex,
  Heading
} from "@/features/components";
import {
  FaHeart,
  FaEye,
  FaBookReader
} from 'react-icons/fa';
import CategoryIcon from "@/features/components/CategoryIcon";
import CategoryTag from "@/features/components/CategoryTag";
import { Post } from "@/features/post/types/post_types";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" margin={5} width="350px" boxShadow="xl">
      <Box as="a" href={`/posts/${post.id}`} cursor="pointer">
        <Box position="relative" width="100%" height="120px">
          <CategoryIcon category={post.category} />
        </Box>
        <Box p="6">
          <Flex alignItems="baseline" mb={2}>
            <CategoryTag category={post.category} />
          </Flex>

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
              {post.title}
            </Heading>
          </Box>

          <Box
            mt="2"
            color="gray.600"
            overflow="hidden"
            display="-webkit-box"
            style={{
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical"
            }}
            height="50px"
          >
            {post.description}
          </Box>

          <Flex mt={4} justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <Box as="span" fontWeight="bold" mr="2">
                <FaBookReader />
              </Box>
              <Box as="span">{post.read}</Box>
            </Flex>
            <Flex alignItems="center">
              <Box as="span" fontWeight="bold" mr={2}>
                <FaHeart color="pink" />
              </Box>
              <Box as="span">{post.favorites}</Box>
            </Flex>
            <Flex alignItems="center">
              <Box as="span" fontWeight="bold" mr={2}>
                <FaEye />
              </Box>
              <Box as="span">{post.views}</Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
