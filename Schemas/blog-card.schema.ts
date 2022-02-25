const mongoose = require("mongoose");
const blogcardSchema=new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    image:{type:String,required:true},
    searchTitle:String,

})
let blogCard = mongoose.models.blogSchema || mongoose.model("blogCards",blogcardSchema);

export default blogCard;