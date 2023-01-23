import Fastify from "fastify";
import cors from "@fastify/cors";
import { prisma } from "./lib/prisma";
import { appRoutes } from "./routes";

const app = Fastify();

const appPort = 3333;

app.register(cors, {
  origin: ["*"],
});

app.register(appRoutes);

app
  .listen({
    port: appPort,
  })
  .then(() => {
    console.log("HTTP Server running on http://localhost:" + appPort);
  });
