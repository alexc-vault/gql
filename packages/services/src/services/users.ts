import { faker } from '@faker-js/faker'

export interface UserCreationAttributes {
  age: number;
  firstName: string;
  lastName: string;
  groups?: number[];
}

export interface UserAttributes extends UserCreationAttributes {
  id: number;
  groups: number[];
}

const users = [...Array(30).keys()].map(id => {
  const groupId = Math.floor(Math.random() * 9);
  
  return { 
    id,
    age: Math.floor(Math.random() * 50) + 18,
    firstName: faker.name.firstName(), 
    lastName: faker.name.lastName(), 
    groups: [groupId, groupId + 1]
  };
});

export function createUser(userData: UserCreationAttributes): UserAttributes {
  const user = { ...userData, groups: userData.groups || [], id: users.length };
  users.push(user);
  
  return user;
}

export function findUserById(id: number): UserAttributes | undefined {
  return users.find((user) => user.id === id);
}

export function findAllUsers(): UserAttributes[] {
  return users;
}
