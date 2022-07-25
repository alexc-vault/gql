import { ApolloServer } from 'apollo-server';

import { createContext } from './context';
import { resolvers, typeDefs } from './schema';

export function createServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext,
    // introspection: true
  });
}
