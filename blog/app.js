//引用express框架
const express = require("express");
//创建服务器
const app = express();
//
const path = require("path");

//引入home,admin路由
const home = require("./route/home");
const admin =require("./route/admin")

//配置使用什么模板引擎
app.engine("art",require("express-art-template"));
//配置模板所在目录
app.set("views",path.join(__dirname,"views"));
//配置模板默认后缀
app.set("view engine","art");

//静态资源
app.use(express.static(path.join(__dirname,"public")));

app.use("/",home);
app.use("/home",home);
app.use("/admin",admin);

//监听3000端口
app.listen(3000);
console.log("网站服务器启动成功");
