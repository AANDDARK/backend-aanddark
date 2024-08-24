import express, { Router } from 'express';
import { spData } from '/home/kovalenko/my-app/my-backend/src/main.js';
import { getRandomPhotoURL } from '/home/kovalenko/my-app/my-backend/src/main.js';
const app = express();
const port = 1234;


app.get('/', (req, res) => {
  res.send("Hello here server aanddark-website.vercel.app");
});
app.get('/api/photos' ,(req, res) => {
  res.json(spData)
})
app.get('/api/random', (req, res) => {
    const photos = getRandomPhotoURL(spData);
    if(photos){
      res.json(photos)
    } else{
      res.status(404).send("WTF image not found ERROR 404")
    }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
