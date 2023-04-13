import React from "react";
import { Box } from "@/features/components";
import PostCardDetail from "@/features/post/components/PostCardDetail";
import { PostId } from "@/features/post/types/post_types";

export default function PostPage({ params }: { params: { id: PostId } }) {

  return (
    <Box>
      <PostCardDetail id={ params.id } />
    </Box>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   // すべての投稿のIDを取得する
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
//     res.json()
//   );
//   const postIds = posts.map((post: any) => post.id);

//   // paramsに渡すIDの配列を作成する
//   const paths = postIds.map((id) => ({ params: { id: id.toString() } }));

//   return { paths, fallback: true };
// };

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//   const post = await getPostById(params?.id as string);
//   return { props: { post } };
// };

