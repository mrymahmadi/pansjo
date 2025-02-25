//my first efforts for connection debug
import Fastify from "npm:fastify";
import users from "./backend/src/routes/user/users.ts";

import { PrismaClient } from "./generated/client/index.d.ts";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const Prisma = require("./generated/client/index.js");
const prisma: PrismaClient = new Prisma.PrismaClient();

const fastify = Fastify({ logger: false });

fastify.register(users);

fastify.get("/", () => {
  return "Hello world!";
});

fastify.listen({ port: 3400 }, (err, server) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`listening on ${server} `);
  }
});

//this file just for test in first time.
