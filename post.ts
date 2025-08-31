export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface IPostApi {
  getPost(id: number): Promise<Post>;
}

export class PostApi implements IPostApi {
  async getPost(id: number): Promise<Post> {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const post = (await response.json()) as Post;
    return post;
  }
}

export class PostService {
  private api: IPostApi;

  constructor(api: IPostApi) {
    this.api = api;
  }

  async postExists(id: number): Promise<boolean> {
    const post = await this.api.getPost(id);
    // postがundefinedやnullでないことを確認
    return post !== null && post !== undefined;
  }
}
