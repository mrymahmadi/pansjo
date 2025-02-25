import { ICity } from "../../../models/users.ts";
import { FastifyRequest, FastifyReply } from "npm:fastify@5.1.0";
import { createRequire } from "node:module";
import { PrismaClient } from "npm:@prisma/client";

const require = createRequire(import.meta.url);
const Prisma = require("../../../../generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();

export const updateCity = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: ICity;
  }>,
  reply: FastifyReply
) => {
  const id = parseInt(request.params.id);
  const { enName } = request.body;
  if (!enName) {
    reply.status(501).send("can not set new value for name");
  }
  const newInfo = await prisma.city.update({
    where: { id },
    data: { enName },
  });
  reply.status(201).send(newInfo);
};
