import { MiddlewareFn } from 'type-graphql';

import { Context } from '../context';


export const LogQuery: MiddlewareFn<Context> = ({ context, info }, next) => {
  context.log(`${info.parentType.name}.${info.fieldName}`);
  return next();
};
