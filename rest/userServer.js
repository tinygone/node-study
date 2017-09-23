/**
 * Created by liqigang on 2017/9/23.
 */
// study rest api, 还不最完善的形式，不应该都使用get请求
var express = require("express");
var app = express();
var fs = require("fs");

app.get("/listUsers", function (req, res) {
    fs.readFile(__dirname + "/user.json", "utf-8", function (err, data) {
        console.log(data);
        res.end(data);
    });
});

//添加的新用户数据
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
};

app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});


var id = 2;

app.get('/deleteUser', function (req, res) {
    console.log("deleteUser");
    // First read existing users.
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        console.log("deleteUser" + data);
        delete data["user" + 2];

        console.log(data);
        res.end(JSON.stringify(data));
    });
});
// 根据匹配规则 ，:id要放到最下面，否则很可能会匹配到错误的分支
app.get('/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        var user = data["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    // hostName undefined
    //var hostName = server.address().hostname;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
    //console.log("应用名称, %s", hostName);
});