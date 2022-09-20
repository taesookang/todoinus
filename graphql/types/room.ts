import {
  extendType,
  intArg,
  objectType,
  stringArg,
  nullable,
  enumType,
  nonNull,
  arg,
  queryField,
} from "nexus";
import { User } from "./user";
import { Project } from "./project";
import prisma from "../../lib/prisma";

export const Room = objectType({
  name: "Room",
  definition(t) {
    t.id("id");
    t.string("name");
    t.list.field("projects", {
      type: Project,
      async resolve(parent, __, ctx) {
        return ctx.prisma.project.findMany({
          where: {
            roomId: parent.id,
          },
        });
      },
    });
    t.list.field("members", {
      type: User,
      async resolve(parent, __, ctx) {
        return ctx.prisma.user.findMany({
          where: {
            rooms: {
              some: {
                id: parent.id
              }
            }
          },
        });
      },
    });
  },
});

export const RoomsByUserId = extendType({
  type: "Query",
  definition(t) {
    t.list.field("rooms", {
      type: Room,
      args: {
        userId: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        const user = ctx.prisma.user.findUnique({
          where: {
            id: args.userId,
          },
        });

        return user.rooms()
      },
    });
  },
});

export const RoomById = extendType({
  type: "Query",
  definition(t) {
    t.field("roomById", {
      type: Room,
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        return ctx.prisma.room.findUnique({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});
export const CreateRoom = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createRoom", {
      type: Room,
      args: {
        name: nonNull(stringArg()),
        userId: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        return await ctx.prisma.room.create({
          data: {
            name: args.name,
            members: {
              connect: [
                {
                  id: args.userId
                }
              ]
            }
          }
        })
      },
    });
  },
});

