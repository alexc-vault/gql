import { Field, ObjectType } from 'type-graphql';

import { GroupsService } from '@vault_h4x/gql-example-services';

@ObjectType('Group')
export class GroupType implements GroupsService.GroupAttributes {
  @Field()
  id: number;

  @Field({ nullable: true })
  name: string;
}
