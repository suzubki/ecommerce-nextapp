import type { NextApiRequest, NextApiResponse } from "next"
import { db, seedData } from "../../database"
import { Product } from "../../models"

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV.trim() === "production") {
    return res.status(401).json({ message: "No tiene acceso a esta ruta" })
  }

  await db.connect()

  await Product.deleteMany()
  await Product.insertMany(seedData.initialData.products)

  await db.disconnect()

  return res.status(200).json({ message: "Realizado correctamente" })
}
