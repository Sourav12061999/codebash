import mongoose from "mongoose";
let connection:boolean=false;
require("dotenv").config();
async function dbConnect() {
    if(connection){
      return;
    }
    const MONGODB_URL:any=process.env.MONGODB_URL
    await mongoose.connect(MONGODB_URL);
    connection=true;
    

}

export default dbConnect;