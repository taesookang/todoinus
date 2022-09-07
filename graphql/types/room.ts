
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
import {User} from './user'
import {Project} from './project'
  
  
  export const Room = objectType({
    name: "Room",
    definition(t) {
      t.id("id");
      t.string("name");
      t.list.field("projects", {
        type: Project,
        async resolve (parent, __, ctx) {
            return ctx.prisma.project.findMany({
                where: {
                    roomId: parent.id
                }
            })
        }
      })
      t.list.field("members", {
        type: User,
        async resolve(parent, __, ctx) {
            return ctx.prisma.user.findMany({
              where: {
                rooms: {
                  every: {
                    id: parent.id
                  }
                }
              },
              select: {
                id: true
              }
            })
        }

      })
    },
  });