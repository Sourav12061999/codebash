import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../Utils/dbConnect'
import blog from '../../Schemas/blog.schema'
import blogCard from '../../Schemas/blog-card.schema'
dbConnect();
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
   try {
       if(req.method==="POST"){
        let body=JSON.parse(req.body);
        let data=await blog.create({
            title:body.title,
            body:"all ok",
            image:"all ok",
            SEO:[],
        })
        let data2=await blogCard.create({
            blog_id:data._id,
            title:data.title,
            body:"all ok",
            image:"all ok",
            searchTitle:data.title.toLowerCase(),
        })
        res.status(200).json(data2);
       }else{
           res.status(300).json({
               isError:true,
               msg:`${req.method} is not valid on this route`
           })
       }
   } catch (error) {
       res.status(400).json({
           isError:true,
           msg:error,
       })
   }
  }  