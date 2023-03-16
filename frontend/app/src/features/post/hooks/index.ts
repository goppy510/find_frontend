import { useState } from "react";
import { postFactory, PostType } from "@/models/post_model";

/* 責務: postsのAPI通信をしデータをstateに格納しておく */

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useAsync(async () => {
    try {
      // Factoryの呼び出し
      const data = await postFactory().index();
      setPosts(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }, []);

  return {
    posts: posts,
    isFetching: isFetching,
  };
};
