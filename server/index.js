import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import shortener from './api/shortener.route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', shortener);
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

export default app;
