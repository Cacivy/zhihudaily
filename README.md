# 知乎日报

### 技术栈

+ vuejs + vue-route + vuex + vue-resource
+ moment.js + swiper
+ jade + sass
+ normalize.css + animate.css

### To Do

- [x] 列表页
- [x] 文章页面
- [x] 返回首页
- [x] 异步加载组件
- [x] 加载动画
- [X] 过渡
- [x] 图片懒加载
- [x] 轮播图控件
- [x] 返回首页定位
- [x] 过往消息缓存
- [x] 专栏
- [x] 栏目总览及列表
- [x] 查看赞
- [x] v-lazy
- [ ] 查看评论

### 目录

```
.
├── README.md
├── build webpack配置
├── config 配置文件
├── dist 打包文件夹
├── index.html 页面入口
├── node_modules 
├── package.json 
├── src 
	├── App.vue
	├── api
	│   ├── api.js 知乎api
	│   ├── index.js api接口
	│   ├── resource.js VueResource
	│   └── server.js node代理
	├── assets
	│   ├── logo.png
	│   ├── screenshots 截图
	│   │   ├── detail.gif
	│   │   ├── list.gif
	│   │   ├── list2.gif
	│   │   └── sections.gif
	│   └── styles
	│       ├── animate.scss 一些css3动画
	│       ├── reset.css cssreset
	│       ├── root.scss 整体样式
	│       └── zhihu.css 知乎文章页的默认样式
	├── components
	│   ├── NewDetail.vue 文章详情页
	│   ├── NewsList.vue 文章列表页
	│   ├── SectionList.vue 栏目总览
	│   ├── TopicList.vue 主题日报
	│   └── general 通用组件
	├── filter.js 过滤器
	├── main.js js入口
	├── router.js 路由
	├── utils
	│   ├── backtop.js
	│   └── lazyload.js 已改为v-lazy
	└── vuex
	    ├── action.js 
	    ├── logger.js
	    ├── plugins.js
	    └── store.js
├── static 静态资源，如默认加载图片
└── test karma测试
```

### Dev

先安装依赖包
```nodejs
npm install
```

安装node-sass需要使用cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install node-sass
```

开启代理
```nodejs
npm run server
```

webpack-server
```nodejs
npm run dev
```

[http://localhost:8080](http://localhost:8080)

### License

> 感谢[yanunon](https://github.com/yanunon/NeteaseCloudMusic/wiki/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90API%E5%88%86%E6%9E%90)提供的api，以及[yatessss](https://github.com/yatessss/zhihudaily-vue)的图片代理解决方案


### Show

![](./src/assets/screenshots/list2.gif)

![](./src/assets/screenshots/sections.gif)