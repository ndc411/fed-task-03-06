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
1. 全部引入，不是按需引入
2. [链接](https://element.eleme.cn/#/zh-CN/component/quickstart)

### 16. 样式处理
1. 在styles/index.scss' 引入 element的样式

### 17. 样式处理-共享全局样式变量
1. [vue cli 处理方式](https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9)
2. 但是