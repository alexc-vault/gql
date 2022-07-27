import { Field, InputType, Int, ObjectType } from 'type-graphql';

import { UsersService } from '@vault_h4x/gql-example-services';

@InputType('UserInput')
export class UserInputType implements UsersService.UserCreationAttributes {
  @Field(() => Int)
  age: number;
  
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => [Int])
  groups: number[];
}
