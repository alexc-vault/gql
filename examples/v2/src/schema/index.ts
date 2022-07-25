import { buildSchemaSync } from 'type-graphql';

import GroupResolver from './group/group.resolver';
import UserResolver from './user/user.resolver';

export const schema = buildSchemaSync({
  resolvers: [GroupResolver, UserResolver]
});
