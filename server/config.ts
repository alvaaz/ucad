import dotenv from 'dotenv'

dotenv.config()

export const PORT = parseInt(process.env.PORT!) || 3000;

export const DATABASE_URL = process.env.DATABASE_URL || `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}`;

export const SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE!) || 60 * 60 * 24 * 30;

export const SESSION_SECRET =
  process.env.SESSION_SECRET ||
  require('crypto')
    .randomBytes(32)
    .toString('base64')
    .replace(/[^a-zA-Z0-9]+/g, '');
