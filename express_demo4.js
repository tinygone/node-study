/**
 * Created by liqigang on 2017/9/23.
 */
var express = require('express');
var fs = require("fs");
var bodyParser = require('body-parser');
var multer  = require('multer');
var app = express();

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false});

// 另外一个形式使用bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// multer用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据
app.use(multer({ dest: '/tmp/'}).array('image'));

app.use(express.static('public'));

app.get('/index_get.htm*', function (req, res) {
    res.sendFile(__dirname + "/express/" + "index_get.html");
});

app.get('/index_post.htm*', function (req, res) {
    res.sendFile(__dirname + "/express/" + "index_post.html");
});

app.get("/uploadFile", function (req, res) {
    res.sendFile(__dirname + "/express/" + "uploadFile.html")
});

app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post("/process_post", urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/file_upload', function (req, res) {

    console.log(req.files[0]);  // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});