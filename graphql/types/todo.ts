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
  inputObjectType,
} from "nexus";
import { User } from "./user";
import { Project } from "./project";

export const Todo = objectType({
  name: "Todo",
  definition(t) {
    t.id("id");
    t.string("content");
    t.field("project", {
      type: Project,
      async resolve(parent, __, ctx) {
        return ctx.prisma.project.findFirst({
          where: {
            todos: {
              some: {
                id: parent.id,
              },
            },
          },
          select: {
            id: true,
          },
        });
      },
    });
    t.nullable.field("done_by", {
      type: User,
      async resolve(parent, __, ctx) {
        return ctx.prisma.user.findFirst({
          where: {
            doneTodos: {
              some: {
                id: parent.id,
              },
            },
          },
        });
      },
    });
  },
});

// Todos by project id

export const GetTodosInProject = extendType({
  type: "Query",
  definition(t) {
    t.list.field("todosByProjectId", {
      type: Todo,
      args: {
        projectId: nonNull(stringArg()),
      },
      async resolve(_, args, ctx) {
        return await ctx.prisma.todo.findMany({
          where: {
            projectId: args.projectId,
          },
        });
      },
    });
  },
});

// add Todo

const TodoInput = inputObjectType({
  name: "TodoInput",
  definition(t) {
    t.nonNull.string("content");
    t.nonNull.string("projectId");
  },
});

export const AddTodo = extendType({
  type: "Mutation",
  definition(t) {
    t.field("AddTodo", {
      type: Todo,
      args: {
        todo: nonNull(
          arg({
            type: TodoInput,
          })
        ),
      },
      async resolve(_, args, ctx) {
        return await ctx.prisma.todo.create({
          data: {
            content: args.todo.content,
            projectId: args.todo.projectId,
          },
        });
      },
    });
  },
});
