// deno-lint-ignore-file
import { PrismaClient } from "./deps.ts";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const Prisma = require("../../generated/client/index.js");
export const prisma: PrismaClient = new Prisma.PrismaClient();
//in project, create bug/error!
