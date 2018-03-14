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

执行结果
![image](https://github.com/zyy1688/express-koa1-koa2-demo/blob/master/image/ko2-demo.png)
```
![image](https://github.com/zyy1688/express-koa1-koa2-demo/blob/master/image/ko2-demo.png)

#### promise方式

```js
readFilePromise('data/data1.json').then(data => {
    return readFilePromise('data/data2.json')
}).then(data => {
    return readFilePromise('data/data3.json')
}).then(data => {
    return readFilePromise('data/data4.json')
})
```

#### generator方式

```js
co(function* () {
    const r1 = yield readFilePromise('data/data1.json')
    const r2 = yield readFilePromise('data/data2.json')
    const r3 = yield readFilePromise('data/data3.json')
    const r4 = yield readFilePromise('data/data4.json')
})
```

#### async-await方式

```js
const readFileAsync = async function () {
    const f1 = await readFilePromise('ddata/data1.json')
    const f2 = await readFilePromise('data/data2.json')
    const f3 = await readFilePromise('data/data3.json')
    const f4 = await readFilePromise('data/data4.json')
}
```





