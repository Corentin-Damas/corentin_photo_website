import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Data", req.body);
  res.status(200).json({ name: "Coco" });


}

export async function POST(request){
    const
}