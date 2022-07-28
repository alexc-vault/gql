import { GraphQLScalarType, Kind } from 'graphql';

const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

export const UUIDScalar = new GraphQLScalarType({
  name: 'UUID',
  description: 'UUID Type',
  serialize(value: unknown): string {
    return value as string;
  },
  parseValue(value: unknown): string {
    if (typeof value !== 'string') {
      throw new Error('UUID can only parse string values');
    }

    if (!regexExp.test(value)) {
      throw new Error('UUID is invalid');
    }

    return value;
  },
  parseLiteral(ast): string {
    if (ast.kind !== Kind.STRING) {
      throw new Error('UUID can only parse string values');
    }

    if (!regexExp.test(ast.value)) {
      throw new Error('UUID is invalid');
    }

    return ast.value;
  },
});
