const mongoose = require("mongoose");

const adminSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})
let admin = mongoose.models.admins || mongoose.model("admins",adminSchema);
export default admin;