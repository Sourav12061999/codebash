const mongoose = require("mongoose");
const blogcardSchema=new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    image:{type:String,required:true},
    searchTitle:String,
    blog_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blogs",
    },
    published:Boolean
})
let blogCard = mongoose.models.blogCards || mongoose.model("blogCards",blogcardSchema);

export default blogCard;