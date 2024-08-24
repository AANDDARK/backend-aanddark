import { DATA } from "./data/data.js";
  function getRandomPhotoURL(data) {
    const photos = data;
    const photoKeys = Object.keys(photos);
  
    const randomIndex = Math.floor(Math.random() * photoKeys.length);
  
    const randomPhotoKey = photoKeys[randomIndex];
    const randomPhoto = photos[randomPhotoKey];
    

    return randomPhoto;
}
const spData = DATA.photos;
export { spData };
export {getRandomPhotoURL};