//引用express框架
const express = require("express");
//创建模块化路由
const admin = express.Router();

admin.get("/", (req,res)=> {
    res.send("欢迎来到管理页面");
})
//将路由作为模块导出
module.exports = admin;