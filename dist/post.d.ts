export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
export interface IPostApi {
    getPost(id: number): Promise<Post>;
}
export declare class PostApi implements IPostApi {
    getPost(id: number): Promise<Post>;
}
export declare class PostService {
    private api;
    constructor(api: IPostApi);
    postExists(id: number): Promise<boolean>;
}
//# sourceMappingURL=post.d.ts.map