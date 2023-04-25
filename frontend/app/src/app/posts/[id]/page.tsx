import React from "react";
import { Box } from "@/features/components";
import PostCardDetail from "@/features/post/components/PostCardDetail/PostCardDetail";
import { PostId } from "@/features/post/types/PostTypes";

export default function PostPage({ params }: { params: { id: PostId } }) {

  return (
    <Box>
      <PostCardDetail id={ params.id } />
    </Box>
  );
}
