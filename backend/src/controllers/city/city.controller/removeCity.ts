import { FastifyRequest, FastifyReply } from "npm:fastify@5.1.0";
import { createRequire } from "node:module";
import { PrismaClient } from "npm:@prisma/client";

const require = createRequire(import.meta.url);
const Prisma = require("../../../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();

export const deletecity = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  await prisma.city.delete({ where: { id } });
  reply.send({ message: "city deleted" });
};
