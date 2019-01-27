module.exports = {
  "globDirectory": "./",    // 匹配根目录
  "globPatterns": [         // 匹配的文件
    "**/*.{css,js,png,jpg,svg}"
  ],
  "globIgnores": [          // 忽略的文件
    // "images/**",
    "workbox-config.js",
    "service-worker.js"
  ],
  "swDest": "build-sw.js",   // 目标输出
  "swSrc": "./service-worker.js" // 输入源
};