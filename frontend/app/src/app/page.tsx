import { Flex, Box} from "@/features/components";
import PostCard from "@/features/post/components/PostCard";
import { Post } from "@/features/post/types/post_types";
import SideBar from "@/features/sidebar/SideBar";

// 投稿データを定義する mock
const posts: Post[] = [
  {
    id: 1,
    title: "投稿タイトル1",
    description: "投稿本文1",
    category: "技術",
    thumbnailUrl: "https://dummyimage.com/350x200/000/fff",
  },
  {
    id: 2,
    title: "投稿タイトル2",
    description: "投稿本文2",
    category: "生活",
    thumbnailUrl: "https://dummyimage.com/350x200/000/fff",
  },
  {
    id: 3,
    title: "投稿タイトル3",
    description: "投稿本文3",
    category: "技術",
    thumbnailUrl: "https://dummyimage.com/350x200/000/fff",
  },
  {
    id: 4,
    title: "投稿タイトル4",
    description: "投稿本文4",
    category: "生活",
    thumbnailUrl: "https://dummyimage.com/350x200/000/fff",
  },
  // その他の投稿データ
];

export default function Home() {
  return (
    <Flex direction={{ base: "column", xl: "row" }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems={{ base: "center", md: "flex-start" }}
        w={{ base: "100%", xl: "75%" }}
        maxW="5xl"
        mx="auto"
        px={{ base: 4, md: 0 }}
        py={8}
        flexWrap="wrap" // ここで折り返しを有効にする
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Flex>
      <SideBar>
        <Box as="img" src="https://via.placeholder.com/400x200" alt="banner" mb={4} mt={4} />
        <Box as="img" src="https://via.placeholder.com/400x200" alt="banner" mb={4} mt={4} />
        <Box as="img" src="https://via.placeholder.com/400x200" alt="banner" mb={4} mt={4} />
      </SideBar>
    </Flex>
  );
}
