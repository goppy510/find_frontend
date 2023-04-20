import { Flex, Box} from "@/features/components";
import PostCard from "@/features/post/components/PostCard";
import { Post } from "@/features/post/types/post_types";
import SideBar from "@/features/sidebar/SideBar";

// 投稿データを定義する mock
const posts: Post[] = [
  {
    id: 1,
    title: "Ultimate Marketing Audience",
    description: "投稿本文1",
    category: "IT",
    favorites: 120,
    views: 280,
    read: 50,
    creatorName: 'hogehoge',
    creatorIcon: "https://github.com/identicons/pronama.png"
  },
  {
    id: 2,
    title: "Midjourney Prompts Helperdddddd",
    description: "With this Midjourney Prompts helper, you can enter your predefined Midjourney Prompts, and ChatGPT will refine your ",
    category: "会計・経理・税務",
    favorites: 120,
    views: 280,
    read: 50,
    creatorName: 'hogehoge',
    creatorIcon: "https://github.com/identicons/pronama.png"
  },
  {
    id: 3,
    title: "投稿タイトル3",
    description: "投稿本文3",
    category: "法務",
    favorites: 120,
    views: 280,
    read: 50,
    creatorName: 'hogehoge',
    creatorIcon: "https://github.com/identicons/pronama.png"
  },
  {
    id: 4,
    title: "投稿タイトル4",
    description: "投稿本文4",
    category: "エクセル・スプレッドシート",
    favorites: 120,
    views: 280,
    read: 50,
    creatorName: 'hogehoge',
    creatorIcon: "https://github.com/identicons/pronama.png"
  },
  {
    id: 5,
    title: "投稿タイトル5",
    description: "投稿本文5",
    category: "文書",
    favorites: 120,
    views: 280,
    read: 50,
    creatorName: 'hogehoge',
    creatorIcon: "https://github.com/identicons/pronama.png"
  },
  {
    id: 6,
    title: "投稿タイトル6",
    description: "投稿本文6",
    category: "メール",
    favorites: 120,
    views: 280,
    read: 50,
    creatorName: 'hogehoge',
    creatorIcon: "https://github.com/identicons/pronama.png"
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
