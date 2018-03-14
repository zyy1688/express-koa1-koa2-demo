# node.js  express koa1 koa2 代码差异

## 快速开始

#### koa2 框架代码执行过程 详见koa2-demo 中app.js
```js
 核心代码
const middleware1 = async (ctx, next) =>{
    ctx.body = `<h1>${indent(1)}请求进入=>=>=>=>=>=>第一个中间件</h1>`
    await next()
    ctx.body += `<h1>${indent(1)}请求退出<=<=<=<=<=<=第一个中间件</h1>`
}

```
#### 执行结果如下图
![image](https://github.com/zyy1688/express-koa1-koa2-demo/blob/master/image/koa2-demo.png)


#### koa1 框架代码执行过程 详见koa2-demo 中app.js
```js
 核心代码
var middleware1 = function *(next){
    this.body = `<h1>${indent(1)}请求进入=>=>=>=>=>=>第一个中间件</h1>`
    yield next
    this.body += `<h1>${indent(1)}请求退出<=<=<=<=<=<=第一个中间件</h1>`
}

```
#### 执行结果如下图
![image](https://github.com/zyy1688/express-koa1-koa2-demo/blob/master/image/koa1-demo.png)





