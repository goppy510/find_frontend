// @ts-nocheck
// use client
import {
  Box,
  Flex,
  Heading,
  Grid,
  GridItem
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
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="100%"
      boxShadow="xl"
      _hover={{ bg: "gray.50" }}
    >
      <Box as="a" href={`/posts/${post.id}`} cursor="pointer">
        <Grid
          templateAreas={`
            "categoryIcon categoryIcon categoryIcon"
            "category category category"
            "title title title"
            "description description description"
            "read like views"
          `}
          templateRows="120px 1fr 20px 70px 1fr"
          templateColumns="110px 110px 110px"
        >
          <GridItem area="categoryIcon">
            <Box height="120px">
              <CategoryIcon category={post.category} />
            </Box>
          </GridItem>
          <GridItem area="category" my={3} mx={6}>
            <Box>
              <CategoryTag category={post.category} />
            </Box>
          </GridItem>
          <GridItem area="title" mx={6}>
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
          </GridItem>
          <GridItem area="description" my={3} mx={6}>
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
          </GridItem>
          <GridItem area="read"my={2} mx={6}>
            <Flex alignItems="center">
              <Box as="span" fontWeight="bold" mr="2">
                <FaBookReader />
              </Box>
              <Box as="span">{post.read}</Box>
            </Flex>
          </GridItem>
          <GridItem area="like" my={2} mx={6}>
            <Flex alignItems="center">
              <Box as="span" fontWeight="bold" mr={2}>
                <FaHeart color="pink" />
              </Box>
              <Box as="span">{post.favorites}</Box>
            </Flex>
          </GridItem>
          <GridItem area="views" my={2} mx={6}>
            <Flex alignItems="center">
              <Box as="span" fontWeight="bold" mr={2}>
                <FaEye />
              </Box>
              <Box as="span">{post.views}</Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
