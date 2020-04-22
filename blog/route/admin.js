//引用express框架
const express = require("express");
//创建模块化路由
const admin = express.Router();

admin.get("/login", (req,res)=> {
    res.render("admin/login");
});

admin.get("/user",(req,res)=>{
    res.render("admin/user");
});

admin.get("/user-edit",(req,res)=>{
    res.render("admin/user-edit");
});
//将路由作为模块导出
module.exports = admin;