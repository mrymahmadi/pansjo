import { FastifyRequest, FastifyReply } from "npm:fastify@5.1.0";
import { createRequire } from "node:module";
import { PrismaClient } from "npm:prisma/client";

const require = createRequire(import.meta.url);
const Prisma = require("../../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();

export const getCity = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  console.log(id);
  if (id) {
    const user = await prisma.city.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        enName: true,
        province: true,
        pansions: true,
        users: true,
      },
    });
    reply.send(user);
  } else {
    reply.status(404).send("city not found");
  }
};
