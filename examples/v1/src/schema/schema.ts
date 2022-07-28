import { gql } from 'apollo-server';


/**
 * const UserType = new GraphQLObjectType({
 *   name: 'User',
 *   fields: {
 *     id: { type: GraphQLInt },
 *     firstName: { type: GraphQLInt },
 *     lastName: { type: GraphQLInt },
 *     age: {
 *       type: GraphQLInt,
 *       resolve(obj) {
 *         ...
 *       }
 *     }
 *     groups: { type: new GraphQLList(GraphQLInt) }
 *     Groups: {
 *       type: new GraphQLList(GroupType),
 *       resolve(obj) {
 *         ...
 *       }
 *     }
 *   }
 * });
 */



export const typeDefs = gql`

  #
  # Types
  enum Measurement {
    YEARS
    HOURS
  }

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    age(measurement: Measurement): Int
    Groups: [Group]!
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
    age: Int
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
