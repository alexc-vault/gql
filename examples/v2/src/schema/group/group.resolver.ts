import {
  Arg,
  Ctx,
  Query,
  Resolver,
} from 'type-graphql';

import { GroupsService } from '@vault_h4x/gql-example-services';

import { Context } from '../../context';
import { GroupType } from './group.type';

@Resolver(() => GroupType)
export default class GroupResolver {

  //
  // Queries
  
  @Query(() => GroupType, { nullable: true })
  async groupById(
    @Ctx() context: Context,
    @Arg('id') id: number
  ): Promise<GroupsService.GroupAttributes | null> {
    return GroupsService.findGroupById(id);
  }

  @Query(() => [GroupType])
  async groups(
    @Ctx() context: Context
  ): Promise<GroupsService.GroupAttributes[]> {
    return GroupsService.findAllGroups();
  }
}
