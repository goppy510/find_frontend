"use client";
import {
  Box,
  Grid,
  GridItem
} from "@/features/components";
import {
  CategoryIcon,
  CategoryTag,
  Title,
  Description,
  MemberViews,
  Likes,
  Views
} from "@/features/post/components/PostCard/parts";
import { Post } from "@/features/post/types/post-types";

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
      h="20em"
      boxShadow="xl"
      _hover={{ bg: "gray.100" }}
    >
      <Box as="a" href={`/posts/${post.id}`} cursor="pointer">
        <Grid
          templateAreas={`
            "categoryIcon categoryIcon categoryIcon"
            "category category category"
            "title title title"
            "description description description"
            "memberViews likes views"
          `}
          templateRows="1fr 0.25fr 0.25fr 0.25fr 8.25fr"
          templateColumns="4fr 4fr 4fr"
        >
          <GridItem area="categoryIcon">
            <CategoryIcon category={post.category} />
          </GridItem>
          <GridItem area="category" my={3} mx={6}>
            <CategoryTag category={post.category} />
          </GridItem>
          <GridItem area="title" mx={6}>
            <Title title={post.title} />
          </GridItem>
          <GridItem area="description" my={3} mx={6}>
            <Description description={post.description} />
          </GridItem>
          <GridItem area="memberViews"my={2} mx={6}>
            <MemberViews memberViews={post.memberViews} />
          </GridItem>
          <GridItem area="likes" my={2} mx={6}>
            <Likes likes={post.likes} />
          </GridItem>
          <GridItem area="views" my={2} mx={6}>
            <Views views={post.views} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
