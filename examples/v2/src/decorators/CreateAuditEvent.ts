import { createMethodDecorator } from 'type-graphql';

import { Context } from '../context';

interface ResolverData {
  context: Context;
}

export function CreateAuditEvent(auditEvent: string) {
  return createMethodDecorator(async ({ context }: ResolverData, next) => {
    const { auditService } = context;

    auditService.addEvent(auditEvent);
    
    return next();
  });
}
