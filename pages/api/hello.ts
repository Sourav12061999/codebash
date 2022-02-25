// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "../../Utils/dbConnect";
import blog from "../../Schemas/blog.schema";
type Data = {
  name: string
}
dbConnect();
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ name: 'Sourav Das' })
}
