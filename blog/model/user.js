//创建用户合集
// 引入mongoose模块
const mongoose = require("mongoose");
// 设置集合规则
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2,
        maxlength:20
    },
    email:{
        type:String,
        //唯一的,保证邮箱地址在数据库中不重复
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    // 0 启动状态
    // 1 禁用状态
    state:{
        type:Number,
        default:0
    }
})

//创建集合
const User = mongoose.model("User",userSchema);

// User.create({
//     username:"mikazuki",
//     email:"598523287@qq.com",
//     password:"123456",
//     role:"admin",
//     state:0
// }).then(()=>{
//     console.log("用户创建成功")
// }).catch(()=>{
//     console.log("用户创建失败")
// })

//将用户集合作为模块成员导出
module.exports = {
    User
}