### PWA开发中遇到的问题
- 1.使用navigator.serviceWorker.register(...)中的路径是相对于根路径的相对路劲。
- 2.CacheStorage
    .delete()，删除某个Cache
    .open()，打开某个Cache（打开后才能修改Cache），若没有则新建一个
    .keys()，得到所有Cache的名称
    .has()，判断某个Cache是否存在
- 3.cache
    .match(requestUrl, options)，返回Promise，能得到requestUrl对应的response
    .put(requestUrl, response)，将requestUrl及其response保存在Cache里
    .delete(requestUrl)，从Cache里删除requestUrl及其response
    .keys()，返回所有存在Cache的requestUrl
    .add(requestUrl)，可以自动取得requestUrl对应的response，然后put进Cache里

### cli工具

``` js
npm install -g workbox-cli
npm install workbox-sw -D
```
workbox wizard 生成配置文件 workbox-config.js；
workbox generateSW 生成 prefetch 的 ServiceWorker JS 文件（依赖 workbox-config.js）；
workbox injectManifest 将 prefetch 代码注入到指定的 JS 文件（依赖 workbox-config.js）；