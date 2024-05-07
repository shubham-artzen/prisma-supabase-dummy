import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  const user = await prisma.user.findMany({
    where: {
      // name: { notIn: ["shub", "hero"] },
      // name: { in: ["shub", "hero"] },
      // email: { endsWith: ".com" },
      // name: { not: "shub" },
      // age: { gte: 20 },
      // email: { contains: ".com1" },
      // email: { startsWith: "name" },
      // name: "withselect",
      // email: { endsWith: ".com" },
      OR: [{ email: { startsWith: "name" } }, { name: "shub" }],
      // AND: [{ email: { startsWith: "name" } }, { name: "shub" }],
    },
  });
  console.log(user, "ggggg");
}

main()
  .catch((e) => console.log(e))
  .finally(async () => await prisma.$disconnect());
