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

import { Todo } from "./todo";
import { Room } from './room';
import { hash } from 'bcrypt'

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("email");
    t.string("image");
    t.list.field("done_todos", {
      type: Todo,
      async resolve(parent, __, ctx) {
        return ctx.prisma.todo.findMany({
          where: {
            doneby: {
              id: parent.id,
            },
          },
        });
      },
    });
    t.list.field("rooms", {
      type: Room,
      async resolve(parent, __, ctx) {
        return ctx.prisma.room.findMany({
          where: {
            members: {
              every: {
                id: parent.id,
              }
            }
          }
        })
      }
    })
  },
});

export const UsersQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("users", {
      type: "User",
      async resolve(_, __, ctx) {
        return ctx.prisma.user.findMany();
      },
    });
  },
});

export const updateUserImage = extendType({
  type: "Mutation",
  definition(t) {
    t.field("updateUserImage", {
      type: "User",
      args: {
        id: nonNull(stringArg()),
        imageFile: nullable(stringArg()),
      },
      async resolve(_, args, ctx) {
        return await ctx.prisma.user.update({
          where: { id: args.id },
          data: {
            image: args.imageFile,
          },
        });
      },
    });
  },
});

export const UserById = extendType({
  type: "Query",
  definition(t) {
    t.field("userById", {
      type: "User",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        return await ctx.prisma.user.findUnique({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});

export const UserByEmail = extendType({
  type: "Query",
  definition(t) {
    t.field("userByEmail", {
      type: "User",
      args: {
        email: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        return await ctx.prisma.user.findUnique({
          where: {
            email: args.email,
          },
        });
      },
    });
  },
});

export const CreateUser = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: "User",
      args: {
        email: nonNull(stringArg()),
        name: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        return await ctx.prisma.user.create({
          data: {
            email: args.email,
            name: args.name,
            password: await hash(args.password, 10) 
          }
        });
      },
    });
  },
})