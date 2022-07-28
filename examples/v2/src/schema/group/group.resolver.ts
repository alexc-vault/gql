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

  //
  // Queries
  @Query(() => GroupType, { nullable: true })
  @UseMiddleware(LogQuery)
  @Authorized('user')
  async groupById(
    @Ctx() context: Context,
    @Arg('id') id: number
  ): Promise<GroupsService.GroupAttributes | null> {
    return GroupsService.findGroupById(id);
  }

  @Query(() => [GroupType])
  @UseMiddleware(LogQuery)
  @Authorized('user')
  async groups(
    @Ctx() context: Context
  ): Promise<GroupsService.GroupAttributes[]> {
    return GroupsService.findAllGroups();
  }
}
