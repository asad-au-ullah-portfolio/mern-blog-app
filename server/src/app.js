// src/app.js
import express from 'express';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('API is running');
});

app.use('/api/posts', postRoutes);

export default app;