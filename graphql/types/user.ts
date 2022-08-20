import { extendType, intArg, objectType, stringArg, enumType } from "nexus";

export const User = objectType({
    name: 'User',
    definition(t) {
      t.id('id');
      t.string('name');
      t.string('email');
      t.string('image');
      t.field('role', { type: Role });
    },
  });

  const Role = enumType({
    name: 'Role',
    members: ['USER', 'ADMIN'], 
  });

  
  