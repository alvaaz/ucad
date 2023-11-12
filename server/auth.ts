import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';
import { SESSION_MAX_AGE, SESSION_SECRET } from './config';

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

const session = statelessSessions({
  maxAge: SESSION_MAX_AGE,
  secret: SESSION_SECRET,
});

export { withAuth, session };
