// index.test.ts

import { Post, PostApi, PostService } from "./index"; // importはそのまま

// テストを書くとき
// これでは実際に外部のAPIを呼び出す必要が出てしまう
// そのため、モックを使ってテストを書く
test("postExists", async () => {
  // ▼▼▼ ここから修正 ▼▼▼

  // モックを使った元のコードをコメントアウト
  // const mockApi: PostApi = {
  //   async getPost(id: number): Promise<Post> {
  //     return {
  //       userId: 1,
  //       id: 1,
  //       title: "test",
  //       body: "test",
  //     };
  //   },
  // };
  // const service = new PostService(mockApi);

  // コンストラクタを使わない呼び出し方を追加
  const service = new PostService();
  s;

  const result = await service.postExists(1);
  expect(result).toBe(true);
});
