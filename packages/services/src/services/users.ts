import { faker } from '@faker-js/faker'
import * as uuid from 'uuid';

export interface UserCreationAttributes {
  age: number;
  firstName: string;
  lastName: string;
  groups?: number[];
}

export interface UserAttributes extends UserCreationAttributes {
  id: string;
}

const users: UserAttributes[] = [...Array(30).keys()].map(id => {
  const groupId = Math.floor(Math.random() * 9);

  return {
    id: uuid.v4(),
    age: Math.floor(Math.random() * 50) + 18,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    groups: [groupId, groupId + 1]
  };
});

console.log(`Use ${users[0].id} for auth`);

export function createUser(userData: UserCreationAttributes): UserAttributes {
  const user = { ...userData, groups: userData.groups || [], id: uuid.v4() };
  users.push(user);

  return user;
}

export function findUserById(id: string): UserAttributes | null {
  return users.find((user) => user.id === id) || null;
}

export function findAllUsers(): UserAttributes[] {
  return users;
}
