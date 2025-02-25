//it file is for db connection testing
import Fastify from "npm:fastify";
import { Client } from "https://deno.land/x/postgres/mod.ts";
const client = new Client({
  database: "cvProject",
  hostname: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
});

try {
  await client.connect();
  console.log("success");
} catch (e) {
  if (e instanceof Deno.errors.ConnectionRefused) {
    console.error(e.message);
  }
}
const fastify = Fastify({ logger: false });
fastify.listen({ port: 3000 }, (err, server) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`listening on ${server} `);
  }
});
