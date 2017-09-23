# Node.js学习手册
过去的一个礼拜，我花了不少时间学习React，最初的Demo完成之后，需要在WebStorm上开发一个项目，并不断引入新的插件，到最后反而跑不起来。这导致我很沮丧，虽然知道其中一个重要问题是用来学习的Demo都比较老了，另一个重要原因是自己的基础不扎实。故而开启学习Node.js之旅。

## 参考网站
http://www.runoob.com/nodejs/nodejs-tutorial.html

## 第一步，创建一个简单应用
经过尝试，在server.js中，不能使用import语法，只能使用var http = require("http");这样的语法。

## 第二步，使用npm
npm本身还好，主要是一些命令，用多了就记住，实在不行百度出命令来。

## 常用的包
常用的包很重要，用好了事半功倍。
http: 搭建http服务器必备
express：还没深入研究 #TODO
REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。

## 回调函数
曾经是一名Java程序员，对回调函数有种莫名的感觉。只能浅层次理解，使用的机会非常少。就看在js领域能否提升了。

## Node.js事件循环
Node.js建立在事件模型基础上，而事件模型的基础又是EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。

## 链式流
链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
接下来我们就是用管道和链式来压缩和解压文件。
创建 compress.js 文件, 代码如下：

```
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");
```

## JavaScript的函数
有非常多好玩的玩法，需要加强Javascript的基础。待把Node.js基本学玩再来加强。

## 路由
可以用 querystring 模块来解析 POST 请求体中的参数
用URL模块分析URL

## 全局对象
### __filename
__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。

### __dirname
__dirname 表示当前执行脚本所在的目录。
### setTimeout(cb, ms)
setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
返回一个代表定时器的句柄值。

### setInterval(cb, ms)
setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

## 常用工具
util是Node的核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足。

## 常用模块
http://www.runoob.com/nodejs/nodejs-utitlity-module.html
序号	模块名 & 描述
1	OS 模块
提供基本的系统操作函数。
2	Path 模块
提供了处理和转换文件路的工具。
3	Net 模块
用于底层的网络通信。提供了服务端和客户端的的操作。
4	DNS 模块
用于解析域名。
5	Domain 模块
简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。

## Web模块


## Express
### Express 简介
Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。
使用 Express 可以快速地搭建一个完整功能的网站。
Express 框架核心特性：
+ 可以设置中间件来响应 HTTP 请求。
+ 定义了路由表用于执行不同的 HTTP 请求动作。
+ 可以通过向模板传递参数来动态渲染 HTML 页面。

以下几个重要的模块是需要与 express 框架一起安装的：
+ body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
+ cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
+ multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

相关命令：
npm install express --save
