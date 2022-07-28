import * as crypto from 'crypto';
import { IncomingMessage, ServerResponse } from 'http';

import { AuditService, UsersService } from '@vault_h4x/gql-example-services'
import { createLogger, Logger } from '@vault_h4x/gql-example-utils'


export interface Context {
  auditService: AuditService;
  log: Logger;
  isAuthenticated: boolean;
  user?: UsersService.UserAttributes;
}

export function createContext(args: { req: IncomingMessage, res: ServerResponse }): Context {
  const { req } = args;

  const requestId = crypto.randomUUID();

  // Auth
  const user = req.headers['authorization']
    ? UsersService.findUserById(req.headers['authorization']) || undefined
    : undefined;

  const isAuthenticated = !!user;

  // Log
  const log = createLogger(requestId, user?.id);

  // Audit
  const auditService = new AuditService(requestId);

  return {
    auditService,
    isAuthenticated,
    log,
    user
  }
}
