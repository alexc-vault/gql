import { Field, Int, ObjectType, registerEnumType } from 'type-graphql';

import { UsersService } from '@vault_h4x/gql-example-services';

export enum Measurement {
  HOURS = 'HOURS',
  YEARS = 'YEARS',
}

registerEnumType(Measurement, {
  name: "Measurement", 
});

@ObjectType('User')
export class UserType implements Omit<UsersService.UserAttributes, 'age'> {
  @Field()
  id: number;

  // @Field()
  // age: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => [Int])
  groups: number[];
}
