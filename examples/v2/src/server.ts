import { ApolloServer } from 'apollo-server';

import { createContext } from './context';
import { schema } from './schema';

export function createServer() {
  return new ApolloServer({
    schema,
    context: createContext,
    // introspection: true
  });
}
