import { GroupsService, UsersService } from '@vault_h4x/gql-example-services';
import { Arg, Ctx, FieldResolver, Int, Query, Resolver, Root, } from 'type-graphql';

import { Context } from '../../context';
import { GroupType } from '../group/group.type';
import { Measurement } from './measurement.enum';
import { UserType } from './user.type';


@Resolver(() => UserType)
export default class UserResolver {
  @Query(() => UserType, { nullable: true })
  async userById(
    @Ctx() context: Context,
    @Arg('id') id: number
  ): Promise<UsersService.UserAttributes | null> {
    return UsersService.findUserById(id);
  }

  @Query(() => [UserType])
  async users(
    @Ctx() context: Context
  ): Promise<UsersService.UserAttributes[]> {
    return UsersService.findAllUsers();
  }


  @FieldResolver(() => Int, { nullable: true })
  age(
    @Root() user: UsersService.UserAttributes,
    @Arg('measurement', () => Measurement, { nullable: true }) measurement?: Measurement
  ): number {
    return measurement === Measurement.HOURS ? user.age * 24 : user.age;
  }
  
  @FieldResolver(() => [GroupType], { nullable: true })
  async Groups(@Root() user: UsersService.UserAttributes): Promise<GroupsService.GroupAttributes[]> {
    return GroupsService.findGroupsByIds(user.groups);
  }
}
