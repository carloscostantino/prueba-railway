import express from 'express';
import { pool } from './db.js';
import { PORT } from './config.js';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT * FROM tasks');
    console.log(result);
    res.send('Enviado al usurario');
});

app.get('/tasks', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM Tasks');
    res.json(rows);
});

app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO Tasks (title, description, createdAt, updatedAt) VALUES (?, ?, NOW(), NOW())', ['Task 1', 'Description of Task 1']);
    console.log(result);
    res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});