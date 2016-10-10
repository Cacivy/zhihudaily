# 知乎日报

### 技术栈

+ vuejs + vue-router + vuex + vue-resource
+ swiper
+ jade + sass
+ normalize.css + animate.css

### Demo

[戳我](http://zhihu.cacivy.com/)

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
- [x] 查看评论
- [x] 迁移至[vue2.0](https://github.com/Cacivy/zhihudaily/blob/master/Vue2.0.md)


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

[MIT](http://opensource.org/licenses/MIT)

> 感谢[izzyleung](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)提供的api，以及[yatessss](https://github.com/yatessss/zhihudaily-vue)的图片代理解决方案


### Show

![](./src/assets/screenshots/list2.gif)

![](./src/assets/screenshots/sections.gif)
