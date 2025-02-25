import { FastifyInstance, join } from "../../tools/deps.ts";
import multipart from "npm:@fastify/multipart";
import * as pansionController from "../../controllers/pansion/pansion.ts";

export default function (fastify: FastifyInstance) {
  fastify.register(multipart, {
    limits: {
      fileSize: 1000000, // Limit file size to 1MB
    },
  });
  fastify.get("/pansions/:id", pansionController.getPansion);
  fastify.get("/pansions", pansionController.getPansions);
  fastify.post("/pansions", pansionController.newPansion);
  fastify.put("/pansions/:id", pansionController.updatePansion);
  fastify.delete("/pansions/:id", pansionController.deletePansion);
  // fastify.post("/addImage", pansionController.addImagePns);
}
