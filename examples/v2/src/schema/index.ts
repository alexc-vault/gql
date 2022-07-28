import { buildSchemaSync } from 'type-graphql';
import { authChecker } from '../authChecker';

import GroupResolver from './group/group.resolver';
import UserResolver from './user/user.resolver';

export const schema = buildSchemaSync({
  authChecker: authChecker,
  resolvers: [GroupResolver, UserResolver]
});
