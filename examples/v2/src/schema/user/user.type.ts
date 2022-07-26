import { Authorized, Field, Int, ObjectType, UseMiddleware } from 'type-graphql';

import { UsersService } from '@vault_h4x/gql-example-services';
import { LogQuery } from '../../middleware/LogQuery';

@ObjectType('User')
export class UserType implements Omit<UsersService.UserAttributes, 'age'> {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @UseMiddleware(LogQuery)
  @Authorized('user')
  @Field(() => [Int])
  groups: number[];
}
