export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export class PostApi {
  async getPost(id: number): Promise<Post> {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const post = (await response.json()) as Post;
    return post;
  }
}

export class PostService {
  // private api: PostApi; // コンストラクタでの受け取りをやめる

  // constructor(api: PostApi) { // コンストラクタを削除
  //   this.api = api;
  // }

  // 内部で直接PostApiをnewする！
  private api: PostApi = new PostApi();

  async postExists(id: number): Promise<boolean> {
    const post = await this.api.getPost(id);
    // postがundefinedやnullでないことを確認
    return post !== null && post !== undefined;
  }
}
