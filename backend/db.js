const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Supabase requires SSL; with pg >=8 you can just rely on sslmode=require in the URL.
  // If you ever need explicit: ssl: { rejectUnauthorized: false }
});

module.exports = { pool };
