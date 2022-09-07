import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       id: "user-id-0",
  //       email: "user0@gmail.com",
  //       name: "user0",
  //       password: await hash("pwuser0", 10),
  //     },
  //     {
  //       id: "user-id-1",
  //       email: "user1@gmail.com",
  //       name: "user1",
  //       password: await hash("pwuser1", 10),
  //     },
  //     {
  //       id: "user-id-2",
  //       email: "user2@gmail.com",
  //       name: "user2",
  //       password: await hash("pwuser2", 10),
  //     },
  //   ],
  // });

  await prisma.room.create({
    data: {
      id: "room-id-a",
      name: "Room A",
      members: {
        connect: {
          id: "user-id-0",
        },
      },
      projects: {
        create: [
          {
            id: "project-id-1",
            name: "Frontend Project",
            todos: {
              createMany: {
                data: [
                  {
                    content: "Create React app.",
                  },
                  {
                    content: "Set up tailwind css.",
                  },
                ],
              },
            },
          },
        ],
      },
    },
  });

  // await prisma.room.createMany({
  //   data:[
  //     {
  //       id:"room-id-a",
  //       name: "Room A"
  //     },
  //     {
  //       id:"room-id-b",
  //       name: "Room B"
  //     },
  //     {
  //       id:"room-id-c",
  //       name: "Room C"
  //     },
  //   ]
  // })

  // await prisma.project.createMany({
  //   data: [
  //    {
  //     id: "project-id-1",
  //     name: "Frontend project",
  //     roomId: "room-id-a"
  //   },
  //    {
  //     id: "project-id-2",
  //     name: "Backend project",
  //     roomId: "room-id-a"
  //   },
  //    {
  //     id: "project-id-1",
  //     name: "Web project",
  //     roomId: "room-id-a"
  //   },
  //   ]
  // })

  // await prisma.todo.createMany({
  //   data: [
  //     {
  //       content: "build a react app",
  //       projectId: "project-id-1"
  //     }
  //   ]
  // })
}

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
