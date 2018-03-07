Vue + Express 前后端脚手架（基于ElementUI）
=========================================

在原版本基础之上，修改了webpack的相关配置文件。使得项目可以运行build命令，编译vue相关代码。
前端部分增加了vue全家桶（vue-router，vuex）以及iView的关联

重新修改了文件夹结构

fork源：[southerncross/vue-express-dev-boilerplate](https://github.com/southerncross/vue-express-dev-boilerplate)

## 关键词

- Vue (vue-router + vuex)
- Element
- Express
- Nodemon
- Webpack
- Npm
- 


## 文件目录

```
.
├── LICENSE
├── README.md
├── nodemon.json
├── package.json
├── src
│   ├── client
│   │   ├── App.vue
│   │   ├── components
│   │   │   └── Hello.vue
│   │   │── static
│   │   │── router
│   │   │── store
│   │   │── views
│   │   └── index.js
│   └── server
│       ├── index.js
│       ├── config
│       ├── dao
│       ├── model
│       ├── router
│       ├── public
│       │   └── favicon.ico
│       └── views
│             └── index.html
├── build
│   ├── build.js
│   ├── clicheck-version.js
│   ├── dev-client.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
     ├── dev.env.js
     ├── index.js
     └── prod.env.js
```

## 用法

1. 安装依赖包

   `npm install`

2. 运行开发环境

   `npm run dev`

3. build前端代码

    `npm run build`
    
    生成后的代码会在根目录的dist目录下。
    此时可专门写一个生产环境启动express的脚本。

