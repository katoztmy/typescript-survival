"use strict";
// index.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("./post"); // importはそのまま
test("postExists", async () => {
    const mockApi = {
        async getPost(id) {
            return {
                userId: 1,
                id: 1,
                title: "test",
                body: "test",
            };
        },
    };
    const service = new post_1.PostService(mockApi);
    const result = await service.postExists(1);
    expect(result).toBe(true);
});
//# sourceMappingURL=post.test.js.map