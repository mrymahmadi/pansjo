import { FastifyRequest, FastifyReply } from "npm:fastify@5.1.0";
import { createRequire } from "node:module";
import { PrismaClient } from "npm:@prisma/client";
const require = createRequire(import.meta.url);
const Prisma = require("../../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();

export const getCities = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const cities = await prisma.city.findMany();
  if (!cities) {
    reply.status(404).send("not yet any cities.");
  } else {
    reply.send(cities);
  }
};
