import {
  Arg, Authorized,
  Ctx,
  Query,
  Resolver, UseMiddleware,
} from 'type-graphql';

import { GroupsService } from '@vault_h4x/gql-example-services';

import { Context } from '../../context';
import { LogQuery } from '../../middleware/LogQuery';
import { GroupType } from './group.type';

@Resolver(() => GroupType)
export default class GroupResolver {

  // @TODO - Create a groups query resolver

  // @TODO - Create a `groupById` query resolver

  // @TODO - Create a `groupsByIds` query resolver

  // @TODO - Create a `groupCreate` mutation resolver
}
