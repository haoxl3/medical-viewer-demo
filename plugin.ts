import type { IApi } from "umi";

export default (api: IApi) => {
    // 中间件支持 cors
    api.addMiddlewares(() => {
        return function cors(req, res, next) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "*");
            res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
            res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
            next();
        };
    });
};