### install
```
pnpm i
```
### run
```
pnpm dev
```
> 使用chrome浏览器打开时，因跨域影响控制台会报错SharedArrayBuffer is not defined，有两种方式
1. 浏览器启用非安全模式，其中MyChromeDevUserData文件夹需要提前自己创建一下

```
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/haoxiaoli/Documents/MyChromeDevUserData --enable-blink-features=SharedArrayBuffer
```
上线时可在nginx中配置请求头
```
location /ffmpeg {
    root   html/dist;
    index  dolphin-ffmpeg.html;
    add_header Cross-Origin-Opener-Policy same-origin;
    add_header Cross-Origin-Embedder-Policy require-corp;
}
```
2. 还可以在devServer中的headers中添加请求头配置，因为此项目采用umi，不支持非运行时请求头配置，故添加插件改写，具体可在根目录的plugin.ts中查看
### build
```
pnpm build
```