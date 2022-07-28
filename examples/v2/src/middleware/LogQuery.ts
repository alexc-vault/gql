import { MiddlewareFn } from 'type-graphql';

import { Context } from '../context';


export const LogQuery: MiddlewareFn<Context> = async ({ context, info }, next) => {
  const start = Date.now();
  context.log(`${info.parentType.name}.${info.fieldName}`);

  await next();

  const resolveTime = Date.now() - start;
  context.log(`${info.parentType.name}.${info.fieldName} [${resolveTime} ms]`);
};
