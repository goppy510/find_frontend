

export type PostType = {
  id: number;
  title: string;
  body: string;
}

export const postFactory = (rep?: PostRepository) => {
  // 引数があればモックデータでなければ本番用データ
  const repository = rep ?? PostRepository;
  return {
    index: async (): Promise<PostType[]> => {
      const response = await repository.getPosts();
      return response;
    },
    show: async (id: Pick<PostType, "id">): Promise<PostType> => {
      const response = await repository.getPost(id);
      return response;
    },
    post: async (params: Omit<PostType, "id">) => {
      await repository.createPost(params);
    },
    delete: async (id: Pick<PostType, "id">) => {
      await repository.deletePost(id);
    },
  };
};
