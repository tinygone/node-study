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
