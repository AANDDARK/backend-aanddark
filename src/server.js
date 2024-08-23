import express from 'express';
import { spData } from '/home/kovalenko/my-app/my-backend/src/main.js';
const app = express();
const port = 1234;
let inputData = spData;

// app.get('/api/photo')

app.get('/', (req, res) => {
  res.send(`дата після логіки: ${inputData}`);
});

// Запускаємо сервер
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
