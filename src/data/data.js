
import fs from 'fs/promises';
import path from 'path';

const jsonPath = path.resolve('/home/kovalenko/my-app/my-backend/src/data/json/photo.json');

async function loadData() {
  try {
    const fileData = await fs.readFile(jsonPath, 'utf8');
    const data = JSON.parse(fileData);
    return data;
  } catch (err) {
    console.error('Error reading JSON file:', err);
    throw err;
  }
}

const DATA = await loadData();

export { DATA };
