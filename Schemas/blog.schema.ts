const mongoose = require("mongoose");

const blogSchema=new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    image:{type:String,required:true},
    SEO:[String],
})
let blog = mongoose.models.blogs || mongoose.model("blogs",blogSchema);

export default blog;