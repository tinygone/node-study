/**
 * Created by liqigang on 2017/9/22.
 */
var server = require("./route/RouteServer");
var router = require("./route/router");

server.start(router.route);