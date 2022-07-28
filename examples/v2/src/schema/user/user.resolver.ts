import { GroupsService, UsersService } from '@vault_h4x/gql-example-services';
import { GraphQLResolveInfo } from 'graphql';
import { Arg, Authorized, Ctx, FieldResolver, Info, Int, Mutation, Query, Resolver, Root, } from 'type-graphql';

import { Context } from '../../context';
import { CreateAuditEvent } from '../../decorators/CreateAuditEvent';
import { GroupType } from '../group/group.type';
import { Measurement } from './measurement.enum';
import { UserInputType } from './user.input';
import { UserType } from './user.type';


@Resolver(() => UserType)
export default class UserResolver {


  //
  // Queries

  @Query(() => UserType, { nullable: true })
  async userById(
    @Arg('id') id: number
  ): Promise<UsersService.UserAttributes | null> {
    return UsersService.findUserById(id);
  }

  @Query(() => [UserType])
  async users(): Promise<UsersService.UserAttributes[]> {
    return UsersService.findAllUsers();
  }

  @Query(() => [UserType])
  async error(
    @Ctx() context: Context,
    @Info() info: GraphQLResolveInfo
  ): Promise<UsersService.UserAttributes[]> {
    const { log } = context;

    const error = new Error('DB Error');

    log(error.message, error.stack, info);

    throw error;
  }


  //
  // Mutations

  @Mutation(() => UserType)
  @CreateAuditEvent('USER_CREATE')
  async userCreate(
    @Ctx() context: Context,
    @Arg('input') input: UserInputType
  ) {
    return UsersService.createUser(input);
  }


  //
  // FieldResolvers

  @FieldResolver(() => Int, { nullable: true })
  age(
    @Root() user: UsersService.UserAttributes,
    @Arg('measurement', () => Measurement, { nullable: true }) measurement?: Measurement
  ): number {
    return measurement === Measurement.HOURS ? user.age * 24 : user.age;
  }

  @Authorized('user')
  @FieldResolver(() => [GroupType], { nullable: true })
  async Groups(
    @Root() user: UsersService.UserAttributes
  ): Promise<GroupsService.GroupAttributes[]> {
    if (!user.groups) {
      return [];
    }

    return GroupsService.findGroupsByIds(user.groups);
  }
}
