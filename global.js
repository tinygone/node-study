/**
 * Created by liqigang on 2017/9/22.
 */
console.log(__filename);
console.log(__dirname);

function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
//setInterval(printHello, 2000);

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
//
console.timeEnd('获取数据');

console.info("程序执行完毕。")