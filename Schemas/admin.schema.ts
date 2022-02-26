const mongoose = require("mongoose");

const adminSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    blogs: [{
        type:mongoose.Schema.Types.ObjectId,
    } ]
})
let admin = mongoose.models.adminSchema || mongoose.model("admins",adminSchema);
export default admin;