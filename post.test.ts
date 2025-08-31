// index.test.ts

import { Post, IPostApi, PostService } from "./post"; // importはそのまま
test("postExists", async () => {
  const mockApi: IPostApi = {
    async getPost(id: number): Promise<Post> {
      return {
        userId: 1,
        id: 1,
        title: "test",
        body: "test",
      };
    },
  };
  const service = new PostService(mockApi);
  const result = await service.postExists(1);

  expect(result).toBe(true);
});
