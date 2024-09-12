import axios from 'axios';
import * as cheerio from 'cheerio';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';
const response = await axios.get(url);
const $ = cheerio.load(response.data);

const imageSrc = $('img')
  .map((i, element) => $(element).attr('src'))
  .get()
  .slice(0, 10);

console.log(imageSrc)
