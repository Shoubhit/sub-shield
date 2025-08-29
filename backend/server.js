require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { pool } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', async (_req, res) => {
  const { rows } = await pool.query('select now() as now');
  res.json({ ok: true, now: rows[0].now });
});

// Example: create a test user
app.post('/users', async (req, res) => {
  const { name, email, auth_provider, auth_id } = req.body;
  try {
    const { rows } = await pool.query(
      `insert into users (name, email, auth_provider, auth_id)
       values ($1,$2,$3,$4)
       returning *`,
      [name, email, auth_provider, auth_id]
    );
    res.status(201).json(rows[0]);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: 'could not create user' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
