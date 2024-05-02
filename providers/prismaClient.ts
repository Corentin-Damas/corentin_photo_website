declare global {
  var prisma: PrismaClient;
}

import { PrismaClient } from "@prisma/client";

var prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  console.log("new prisma client");
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
