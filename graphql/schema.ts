import { makeSchema, asNexusMethod, decorateType , scalarType} from "nexus";
import { join } from "path";
import * as types from './types'
import { GraphQLSchema } from 'graphql'
import { GraphQLDateTime } from 'graphql-iso-date'
// import { GraphQLDateTime } from "graphql-scalars";

export const GQLDate = asNexusMethod(GraphQLDateTime, 'date')

export const schema = makeSchema({
  types: [types, GQLDate],
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "index.d.ts"
    ),
    schema: join(process.cwd(), "graphql", "schema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "graphql", "context.ts"),
  },
}) as unknown as GraphQLSchema