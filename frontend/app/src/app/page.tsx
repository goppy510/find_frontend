"use client";
import { useState, useEffect, useRef } from "react";
import {
  Grid,
  GridItem
} from "@/features/components";
import PostCard from "@/features/post/components/PostCard";
import { Post } from "@/features/post/types/post_types";

// 投稿データを定義する mock
const postMock1: Post[] = [
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
  }
]

const postMock2: Post[] = [
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

// 1 つのページあたりに表示する投稿の数
const PAGE_SIZE = 3;

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  // 初回
  useEffect(() => {
    const fetchInitialPosts = async () => {
      const initialPosts = posts.slice(0, PAGE_SIZE);
      //setPosts(initialPosts);
      setPosts(postMock1);
    };

    fetchInitialPosts();
  }, []);

  useEffect(() => {
    const fetchNextPage = async () => {
      const nextPagePosts = posts.slice(posts.length, posts.length + PAGE_SIZE);
      //setPosts((prevPosts) => [...prevPosts, ...nextPagePosts]);
      setPosts((prevPosts) => [...prevPosts, ...postMock2]);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        fetchNextPage();
      }
    });

    observer.observe(bottomRef.current as HTMLDivElement);

    return () => observer.disconnect();
  }, [posts]);

  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={5}
    >
      {posts.map((post) => (
        <GridItem key={post.id}>
          <PostCard post={post} />
        </GridItem>
      ))}
      <div ref={bottomRef} style={{ height: "10px", backgroundColor: "transparent" }} />
    </Grid>
  );
}