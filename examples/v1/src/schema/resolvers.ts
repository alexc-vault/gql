import { UsersService, GroupsService } from '@vault_h4x/gql-example-services';
import { GraphQLResolveInfo } from 'graphql';

import { Context } from '../context';

interface UserInput {
  age: number;
  firstName: string;
  lastName: string;
  groups?: number[]
}

export const resolvers = {

  //
  // Field Resolvers
  User: {
    age: (root: UsersService.UserAttributes, args: { measurement: string }) => {
      const { measurement } = args;

      return measurement === 'HOURS' ? root.age * 24 : root.age;
    },
    Groups: (root: UsersService.UserAttributes) => {
      if (!root.groups) {
        return [];
      }

      return GroupsService.findGroupsByIds(root.groups)
    }
  },

  //
  // Query Resolvers
  Query: {
    userById: (_root: any, args: { id: number }) => {
      return UsersService.findUserById(args.id)
    },
    users: () => {
      return UsersService.findAllUsers();
    },

    groups: () => {
      return GroupsService.findAllGroups();
    },

    error: (_root: any, _args: never, ctx: Context, info: GraphQLResolveInfo) => {
      const { log } = ctx;

      const error = new Error('DB Error')

      log(error.message, error.stack, info);

      throw error;
    },
  },

  //
  // Mutation Resolvers
  Mutation: {
    userCreate: (_root: any, args: { input: UserInput }, ctx: Context) => {
      const { auditService } = ctx;

      auditService.addEvent('USER_CREATE');

      return UsersService.createUser(args.input);
    },
  }
};
