import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "../../../../Utils/dbConnect";
import admin from "../../../../Schemas/admin.schema";
dbConnect();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        let {email,password}=req.query;
        let data= await admin.findOne({$and:[{email},{password}]}).lean().exec();
        if(data){
             res.status(200).json({
                 isError:false,
                 msg:`Welcome back ${data.name}`,
                 data
             });
        }else{
        res.status(303).json({
            msg:"Admin not found",
            isError:true,
            data
        });
      }
    } catch (error) {
        res.status(300).json("Not found");
    }
}
