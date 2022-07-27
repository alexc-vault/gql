import { faker } from '@faker-js/faker'

export interface GroupCreationAttributes {
  name?: string;
}

export interface GroupAttributes extends GroupCreationAttributes {
  id: number;
}

const groups: GroupAttributes[] = [...Array(10).keys()].map(id => {
  return { id, name: faker.name.jobTitle() };
});

export function createGroup(groupData: GroupCreationAttributes): GroupAttributes {
  const group = { ...groupData, id: groups.length };
  groups.push(group);
  
  return group;
}

export function findGroupById(id: number): GroupAttributes | null {
  return groups.find((group) => group.id === id) || null;
}

export function findGroupsByIds(ids: number[]): GroupAttributes[] {
  return groups.filter((group) => ids.includes(group.id));
}

export function findAllGroups(): GroupAttributes[] {
  return groups;
}
