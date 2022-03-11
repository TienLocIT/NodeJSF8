const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose); //tự tăng ID khi insert
const slug=require("mongoose-slug-generator");
var mongoose_delete = require('mongoose-delete');
const courseModel=new mongoose.Schema({
    id:{type:Number},
    name:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,default:"default.jpg"},
    slug:{type:String,unique:true,slug:"name"}, //unique chỉ có mình nó nếu có thêm nữa thì sẽ dùng shortID
    level:{type:String},
    videoId:{type:String,required:true},
},{
    timestamps:true, //tạo createdAt and UpdatedAt
    versionKey:false  //không cần version key 
})
mongoose.plugin(slug)
mongoose.plugin(mongoose_delete,{ 
    deletedAt : true ,
    overrideMethods: 'all'
}) //soft delete
courseModel.plugin(AutoIncrement, {inc_field: 'id'}); 
module.exports=mongoose.model("Course",courseModel);