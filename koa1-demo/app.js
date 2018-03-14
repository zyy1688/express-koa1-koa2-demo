var Koa=require("koa")
var logger = require("koa-logger")
var app=new Koa()
var indent=function(n){
    return new Array(n).join("&nbsp;&nbsp;&nbsp;")
}

var middleware1 = function *(next){
    this.body = `<h1>${indent(1)}请求进入=>=>=>=>=>=>第一个中间件</h1>`
    yield next
    this.body += `<h1>${indent(1)}请求退出<=<=<=<=<=<=第一个中间件</h1>`
}
var middleware2 = function *(next){
    this.body += `<h1>${indent(2)}请求进入=>=>=>=>=>=>第二个中间件</h1>`
    yield next
    this.body += `<h1>${indent(2)}请求退出<=<=<=<=<=<=第二个中间件</h1>`
}
var middleware3 = function *(next){
    this.body += `<h1>${indent(3)}请求进入=>=>=>=>=>=>第三个中间件</h1>`
    yield next
    this.body += `<h1>${indent(3)}请求退出<=<=<=<=<=<=第三个中间件</h1>`
}


app.use(logger())
app.use(middleware1)
app.use(middleware2)
app.use(middleware3)
app.use(function *(next){
    this.body += `<h1>${indent(4)}请求进入=>=>=>=>=>=>核心中间件</h1>`
    yield next
    this.body += `<h1>${indent(4)}请求退出<=<=<=<=<=<=核心中间件</h1>`
})
app.listen(3333)