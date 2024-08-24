import express from 'express';
import { spData } from './main.js';
import { getRandomPhotoURL } from './main.js';
const app = express();
const port =  process.env.PORT || 4000;

app.use('/content', express.static('public'))

app.get('/', (req, res) => {
  res.send(`Hello here server <a href="https://aanddark-website.vercel.app/">AANDDARK</a>`);
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
