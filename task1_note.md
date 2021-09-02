## task1

### 3. 初始目录结构说明
1. editConfig

### 4. 调整初始目录结构

### 5. 使用TS开发Vue-环境说明
> 已有项目，添加Vue 官方配置的TypeScript 适配插件，使用 @vue/cli 安装 TypeScript 插件

```
vue add @vue/typrscript
```

### 6. 使用TS开发Vue项目-相关配置说明
1. todo 认真复习

### 7. 使用TS开发Vue项目-使用OptionsAPI定义Vue组件
1. [官方文档](https://cn.vuejs.org/v2/guide/typescript.html)


### 8 使用TS开发Vue项目-使用ClassAPIs定义Vue组件 
1. [官方链接](https://cn.vuejs.org/v2/guide/typescript.html#%E5%9F%BA%E4%BA%8E%E7%B1%BB%E7%9A%84-Vue-%E7%BB%84%E4%BB%B6)


### 9. 使用TS开发Vue项目---装饰器（不建议在生产中使用，因为提案还没定稿）
1. 用来扩展类的属性
```
functon testable(target) {
  target.isTest = true
}

@testable
class MyClass {
  // do something

}
console.log(MyClass.isTest) // --> true
```
2. 相关学习资源---阮一峰ES6入门，typescript

### 10. 使用TS开发Vue项目-使用VuePropertyDecorator创建Vue组件
1. []()

### 11. 使用TS开发Vue项目---总结创建组件的方式,只使用Options APIs即可
1. Options Apis
2. Class apis
3. Class APIs + decorator

### 12. 代码格式规范---介绍

### 13. 代码格式规范---项目中的代码规范说明
1. package.json ---- eslint-plugin-vue, eslint-config-typescript, eslint-plugin-standard
2. [vuejs-style-guide](https://cn.vuejs.org/v2/style-guide)

### 14. 代码格式规范-自定义校验规则
1. 如果配置了自定义规则，不生效，可以先刷新node_modules目录，然后删除.cache 文件夹，最后重启项目
2. ts 代码规则和普通的js规则不一样，需要在.eslintrc.js中单独配置
    > 鼠标移动到‘@vue/eslint-config-typescript’上，[查看链接](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### 15. 导入Element 组件库
1. 此项目需要全部引入，不是按需引入
2. [链接](https://element.eleme.cn/#/zh-CN/component/quickstart)

### 16. 样式处理
1. 在styles/index.scss' 引入 element的样式

### 17. 样式处理-共享全局样式变量
1. [vue cli 处理方式](https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9)
2. 但是sass需要处理 [处理方式](https://blog.csdn.net/weixin_52369659/article/details/117949984)

### 18. 接口处理-配置后端代理
1. [vue cli 官方配置](https://cli.vuejs.org/zh/config/#devserver-proxy)
2.后台提供的数据接口
  > http://eduboss.lagou.com
  > [http://edufront.lagou.com](http://113.31.105.128/front/doc.html#/home)
  这两个接口都没有提供CORS 跨域请求，所以需要在客户端配置服务端代理处理跨域请求

### 19. 接口处理-封装请求模块
1. axios

### 20. 布局-初始化路由组件
1. [vscode 自动生成代码片段](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

### 21. 布局-Layout和嵌套路由
1. [vue 嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)

### 22. 布局-Container布局容器
1. [布局容器](https://element.eleme.cn/#/zh-CN/component/container)

### 23. 布局-侧边栏菜单
1. 在 el-menu 中添加 router 属性开启路由模式

### 24. 登录-头部Header

### 25. 登录-页面布局

### 26. 登录-接口测试
1. postman 的使用，包括创建集合--收集一系列的请求
2. 定义url变量，在使用时方便的切换---生产，测试

### 27. 登录--请求登录
1. mobile: 18201288771  pwd: 111111(18211111111)
2. axios 默认发送的是application/json 格式的数据，所以根据接口要求，需要转化--> 可以使用 qs
3. axios post的接口，数据需要放在data中

### 28. 登录-处理请求结果
1. 组件调用使用 this.$message
2. 可以直接return
```
if (data.state !== 1) {
  return this.$message.error(data.message)
}
```

### 29. 登录-请求期间禁用按钮点击
1. try catch能让代码继续往下执行，所以在最后去除loading
2. element ui表单验证很奇特，第一次见这种写法
```
try {
        await (this.$refs.form as Form).validate()
        this.isLoginLoading = true
        // ...
} catch () {
  // ...
}
<!-- hideLoding -->
this.loading = false
```

### 30. 登录-表单验证
1. `this.$refs.form as Form`，是为了符合ts的类型代码校验，这里的Form可以使用any代替，但是这是万不得已才做的，
2. 该校验返回promise，可以用async await，使用try catch捕获async await异常

### 31. 登录-封装请求方法
1. 简单的axios封装，单独文件封装一类请求，请求数据的格式严格定义

### 32. 登录-关于请求体data和ContentType的问题
 > axios中：发送请求时，content-type 的值：
    1. data 是普通对象，其值为: application/json(axios 默认值)
    2. data 是 qs stringfy转换之后的数据：key=value&key2=value2，此时content-type被设置为: x-www-form-urlencode
    3. data 是FormData对象， 则 Content-Type 被设置为 multipart/form-data

### 33. 身份认证-把登录状态存储到Vuex容器中
1. 简单的持久化

### 34. 身份认证-校验页面访问权限
1. 通过在父路由设置 是否需要登录，来统一处理登录，方便简单

### 35. 身份认证-测试获取当前登录用户信息接口
1. 在postman中设置统一的参数，不再重复的为每个接口添加参数

### 36. 身份认证-登录成功跳转回原来页面
1. 登录跳转地址的 转化
```
this.$router.push(this.$route.query.redirect as string || '/')
```

### 37. 身份认证-展示当前登录用户信息

### 38. 身份认证-使用请求拦截器统一设置Token
1. [axios文档](http://www.axios-js.com/zh-cn/docs/#%E6%8B%A6%E6%88%AA%E5%99%A8)

### 39. 身份认证-用户退出
1. 在组件中直接添加点击事件可能行不通，解决方案
    > 1. 看组件文档； 2. 使用@click.native 穿透到他的根元素上，添加点击事件