import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { username, email, appid, provider, image } = req.body;

    const existingUser = await prisma.user.findFirst({
      where: {
        appid: appid,
      },
    });

    if (existingUser) {
      res.json({ message: "exists" });
    } else {
      const user = await prisma.user.create({
        data: {
          username: username,
          email: email,
          appid: appid,
          provider: provider,
          image: image||"",
        },
      });
      res.send({ user });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "bad request" });
  }
}
