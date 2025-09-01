"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = exports.PostApi = void 0;
class PostApi {
    async getPost(id) {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const post = (await response.json());
        return post;
    }
}
exports.PostApi = PostApi;
class PostService {
    constructor(api) {
        this.api = api;
    }
    async postExists(id) {
        const post = await this.api.getPost(id);
        // postがundefinedやnullでないことを確認
        return post !== null && post !== undefined;
    }
}
exports.PostService = PostService;
//# sourceMappingURL=post.js.map