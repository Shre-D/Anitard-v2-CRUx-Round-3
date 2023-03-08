import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { appid, image } = req.body;
    const updatedProfile = await prisma.user.update({
      where: {
        appid: appid,
      },
      data: {
        image: image,
      },
    });
    res.send({ updatedProfile });
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "bad request" });
  }
}
