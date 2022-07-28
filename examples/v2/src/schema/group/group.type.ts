import { Authorized, Field, Int, ObjectType, UseMiddleware } from 'type-graphql';

import { GroupsService } from '@vault_h4x/gql-example-services';

import { LogQuery } from '../../middleware/LogQuery';

@ObjectType('Group')
export class GroupType implements GroupsService.GroupAttributes {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @UseMiddleware(LogQuery)
  name: string;
}
