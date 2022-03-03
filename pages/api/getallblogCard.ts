import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../Utils/dbConnect'
import blogCard from '../../Schemas/blog-card.schema'

dbConnect();

export default async function handler(req:NextApiRequest,res:NextApiResponse){
 try {
     let data= await blogCard.find({}).lean().exec();
     res.status(200).json(data);
     
 } catch (error) {
     res.status(400).json({
         isError:true,
         msg:error,
     })
 }
}