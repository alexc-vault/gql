import { AuthChecker } from 'type-graphql';

import { Context } from './context';

export const authChecker: AuthChecker<Context> = (
  { context },
  permissions
) => {
  if (permissions.includes('user')) {
    return context.isAuthenticated;
  }

  return false;
};
