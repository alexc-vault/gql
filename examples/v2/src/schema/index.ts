import { buildSchemaSync } from 'type-graphql';
import { authChecker } from '../authChecker';
import { UUIDScalar } from '../scalars/uuid';

import GroupResolver from './group/group.resolver';
import UserResolver from './user/user.resolver';

export const schema = buildSchemaSync({
  authChecker: authChecker,
  resolvers: [GroupResolver, UserResolver],
  scalarsMap: [
    { scalar: UUIDScalar, type: String }
  ]
});
