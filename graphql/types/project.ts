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
import { Room } from "./room";
import { Todo } from "./todo";
import prisma from '../../lib/prisma';

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.id("id");
    t.string("name");
    t.list.field("todos", {
      type: Todo,
      async resolve(parent, __, ctx) {
        return ctx.prisma.todo.findMany({
          where: {
            projectId: parent.id,
          },
          select: {
            id: true,
          }
        });
      },
    });
    t.field("room", {
      type: Room,
      async resolve(parent, __, ctx) {
       return ctx.prisma.room.findFirst({
        where: {
          projects: {
            some: {
              id: parent.id
            }
          }
        },
        select: {
          id: true
        }
       })
      },
    });
  },
});

