import { neon } from '@neondatabase/serverless'

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
    console.warn('⚠️  Warning: DATABASE_URL is not defined in .env. Database connection will fail.');
}

const sql = neon(DATABASE_URL || '');

export default sql;