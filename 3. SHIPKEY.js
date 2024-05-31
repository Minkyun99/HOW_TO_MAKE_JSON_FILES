import fetch from 'node-fetch';
import path from 'path';
import { promises as fs } from 'fs';

async function fetchLocalJsonFile(filePath) {
    const absolutePath = path.resolve(filePath);
    const fileContent = await fs.readFile(absolutePath, 'utf8');
    return JSON.parse(fileContent);
}

fetchLocalJsonFile('./ships_data.json')
    .then(data => {
        console.log(Object.keys(data))
        console.log(Object.keys(data)[0])
        console.log(Object.length)
        console.log(Object.keys(data).length)
    })
    .catch(error => {
        console.error('Error:', error);
    });