### PWA 开发中遇到的问题

- 1.使用 navigator.serviceWorker.register(...)中的路径是相对于根路径的相对路劲。
- 2.CacheStorage(caches 是 CacheStorage 实例化对象 window.caches.**proto** == CacheStorage.prototype //true)
  .delete()，删除某个 Cache
  .open()，打开某个 Cache（打开后才能修改 Cache），若没有则新建一个
  .keys()，得到所有 Cache 的名称
  .has()，判断某个 Cache 是否存在
- 3.cache
  .match(requestUrl, options)，返回 Promise，能得到 requestUrl 对应的 response
  .put(requestUrl, response)，将 requestUrl 及其 response 保存在 Cache 里
  .delete(requestUrl)，从 Cache 里删除 requestUrl 及其 response
  .keys()，返回所有存在 Cache 的 requestUrl
  .add(requestUrl)，可以自动取得 requestUrl 对应的 response，然后 put 进 Cache 里

### cli 工具

```shell
npm install -g workbox-cli
npm install workbox-sw -D
```

- workbox wizard 生成配置文件 workbox-config.js；
- workbox generateSW 生成 prefetch 的 ServiceWorker JS 文件（依赖 workbox-config.js）；
- workbox injectManifest 将 prefetch 代码注入到指定的 JS 文件（依赖 workbox-config.js）；

### 前置条件

1、前提条件 Service Worker 出于安全性和其实现原理，在使用的时候有一定的前提条件。由于 Service Worker 要求 HTTPS 的环境，我们通常可以借助于 github page 进行学习调试。当然一般浏览器允许调试 Service Worker 的时候 host 为 localhost 或者 127.0.0.1 也是 ok 的。

2、Service Worker 的缓存机制是依赖 Cache API 实现的

3、依赖 HTML5 fetch API

4、依赖 Promise 实现

### 生命周期及事件

1、install：Service Worker 安装成功后被触发的事件，在事件处理函数中可以添加需要缓存的文件

2、activate：当 Service Worker 安装完成后并进入激活状态，会触发 activate 事件。通过监听 activate 事件你可以做一些预处理，如对旧版本的更新、对无用缓存的清理等。

3、message：Service Worker 运行于独立 context 中，无法直接访问当前页面主线程的 DOM 等信息，但是通过 postMessage API，可以实现他们之间的消息传递，这样主线程就可以接受 Service Worker 的指令操作 DOM。

4、fetch (请求)：当浏览器在当前指定的 scope 下发起请求时，会触发 fetch 事件，并得到传有 response 参数的回调函数，回调中就可以做各种代理缓存的事情了。

5、push (推送)：push 事件是为推送准备的。不过首先需要了解一下 Notification API 和 PUSH API。通过 PUSH API，当订阅了推送服务后，可以使用推送方式唤醒 Service Worker 以响应来自系统消息传递服务的消息，即使用户已经关闭了页面。

6、sync (后台同步)：sync 事件由 background sync (后台同步)发出。background sync 配合 Service Worker 推出的 API，用于为 Service Worker 提供一个可以实现注册和监听同步处理的方法。但它还不在 W3C Web API 标准中。在 Chrome 中这也只是一个实验性功能，需要访问

### 开发相关文档

1、[官方文档 https://developers.google.com/web/tools/workbox/](https://developers.google.com/web/tools/workbox/)

2、[https://zoumiaojiang.com/article/amazing-workbox-3/](https://zoumiaojiang.com/article/amazing-workbox-3/)

3、[百度 pwa 教程](https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/service-worker-lifecycle)

### 其他问题

1、怎么更新 service Worker 呢？

> 很简单，你只需要更改 sw.js 就行了，它会在下次联网时主动检测并进行比对，如果不同，那么会重新安装。

2、怎么更新缓存后的脚本或文件呢？

> 这需要你自己手动的检测了，你可以开发一个检测更新的接口，然后手动的再次请求并更新部分文件

3、有没有什么成功的案例可以借鉴呢？

> 有，用 chrome 打开 Vue 中文官网，会提示你加入桌面，同意之后，你就会发现 pwa 的神奇之处了。

4、我的 PWA 怎么手机上不支持？

> 你需要安装 chrome 或者 Firefox，并且授予它一些基本的权限，比如允许创建桌面图标

5、pwa 除允许离线访问外的其他应用？

> 除离线访问外，pwa 还可以调用一些原生 APP 才可以调用的接口，也可以像原生的 APP 那样推送消息
