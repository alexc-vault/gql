import { Field, Int, ObjectType } from 'type-graphql';

import { UsersService } from '@vault_h4x/gql-example-services';

@ObjectType('User')
export class UserType implements Omit<UsersService.UserAttributes, 'age'> {
  @Field()
  id: number;
  
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => [Int])
  groups: number[];
}
