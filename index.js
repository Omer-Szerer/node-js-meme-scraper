import fs from 'node:fs'; // imports a node.js module for interacting with the file system
import axios from 'axios'; // imports a library for making HTTP requests
import * as cheerio from 'cheerio'; // imports a library for manipulating HTML, select all images

if (!fs.existsSync("memes")) { // creates a "meme" directory
  fs.mkdirSync("memes");
}

const url = 'https://memegen-link-examples-upleveled.netlify.app/'; // the desired website

const response = await axios.get(url); // a variable that await the response
const $ = cheerio.load(response.data); // a variable that loads the html content

const imageSrc = $('img') // return the first 10 images with src attribute
  .map((i, element) => $(element).attr('src'))
  .get()
  .slice(0, 10);

console.log(imageSrc) // log the first 10 img urls if successful
