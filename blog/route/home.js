//引用express框架
const express = require("express");
//创建模块化路由
const home = express.Router();

home.get("/", (req,res)=> {
    res.render("home/default");
})
//将路由作为模块导出
module.exports = home;