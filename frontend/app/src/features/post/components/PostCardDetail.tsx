import { Box } from "@/features/components";
import { PostDetail, PostId } from "@/features/post/types/post_types";

type Props = {
  id: PostId;
};

// mock
const postDetail: PostDetail = {
  id: 1,
  title: "投稿タイトル1",
  body: "投稿本文1",
  category: "技術",
  thumbnailUrl: "https://dummyimage.com/350x200/000/fff",
}

export default function PostCardDetail({ id }: Props) {
  return (
    <Box>
      <Box as="h1" fontSize="4xl" fontWeight="bold" mb="4">
        {postDetail.title}
      </Box>
      <Box as="p" fontSize="2xl" mb="4">
        {postDetail.body}
      </Box>
      <Box as="p" fontSize="xl" mb="4">
        Category: {postDetail.category}
      </Box>
      <Box as="img" src={postDetail.thumbnailUrl} alt={postDetail.title} mb="4" />
    </Box>
  );
}
