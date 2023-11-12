import { config } from '@keystone-6/core';
import { lists } from './schema';
import { PORT, DATABASE_URL } from './config';
import { withAuth, session } from './auth';


export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: DATABASE_URL,
    },
    server: {
      port: PORT,
      cors: {
        credentials: true,
        origin: [
          `localhost:3000`
        ],
      },
    },
    lists,
    session,
    graphql: {
      path: '/api/graphql',
      cors: {
        origin: [
          `localhost:3000`
        ],
        credentials: true,
      },
    }
  })
);
