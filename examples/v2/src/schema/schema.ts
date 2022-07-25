import { gql } from 'apollo-server';

export const typeDefs = gql`

  #
  # Types
  enum Measurement {
    YEARS
    HOURS
  }

  type User {
    id: Int
    firstName: String
    lastName: String
    age(measurement: Measurement): Int
    groups: [Group]!
  }

  type Group {
    id: Int
    name: String
  }

  #
  # Input Types
  input UserInput {
    firstName: String!
    lastName: String!
    groups: [Int!]
  }

  #
  # Queries
  type Query {
    users: [User]!
    userById(id: Int): User
    
    groups: [Group]!
    groupById(id: Int): Group
    # groupsByIds(ids: [Int!]!): Group
    
    error: User
  }

  #
  # Mutations
  type Mutation {
    userCreate(input: UserInput): User
  }
`;
