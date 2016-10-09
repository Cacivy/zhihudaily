vue 2.0

需要升级的包列表

```bash
npm i vue@2.0.1 --save
npm i vue-router@2.0.0 --save
npm i vuex@2.0.0 --save
npm i vuex-router-sync@3.0.0 --save
npm i vuex-loader@9.5.1 --save-dev
```

> 下面概括一些比较常用语法的修改

### Vue

#### basic

​	[Migration from Vue 1.x](http://vuejs.org/guide/migration.html)

​	官方文档已经很详细了

#### ready

```javascript
 mounted() {
     this.$nextTick(() => {
        // ready
     })
 }
```



#### filter	

现在filter只在{{}}中生效，推荐使用计算属性或者方法，比较不爽的一个点

#### transition

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
```



### Vue-Router

#### basic

[vue-router 2](http://router.vuejs.org/zh-cn/index.html)

添加了全局和离开当前页的钩子，更灵活了

#### router-link

​	个人感觉不是很方便，特别是```<router-link tag="a"></router-link>```这样的用法

#### route data

```javascript
beforeRouteEnter (to, from, next) => {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

### Vuex

#### basic

[vuex 2.0](http://vuex.vuejs.org/en/index.html)

#### getters

```javascript
vuex: {
 -      getters: {
 -        posts: state => state.posts
 -      },
 -      actions: {
 -        getPost
 -      }
 }
```

改为

```javascript
import { mapGetters, mapActions } from 'vuex'
   computed: {
 +    ...mapGetters([
 +      'posts'
 +    ]),
   }
    methods: {
 +    ...mapActions([
 +      'getPost'
 +    ]),
   }
```

