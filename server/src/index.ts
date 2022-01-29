import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: "Bob",
  //     email: "bob@bob.com",
  //     posts: {
  //       create: { title: "Hello World" },
  //     },
  //     profile: {
  //       create: { bio: "This is my first user" },
  //     },
  //   },
  // });

  const allUsers = await prisma.user.findMany({
    include: { posts: true, profile: true },
  });
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
