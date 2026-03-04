import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import fs from 'fs';

const scraper = async () => {
  const res = await fetch('https://bible.cbck.or.kr/Knb/Mt/1');
  const html = await res.text();

  const $ = cheerio.load(html);
  const result = {};

  $('.row').each((_, row) => {
    const verseNum = $(row).find('.highlight').text().trim();
    const verseText = $(row).find('.text-justify p').text().trim();

    if (verseNum && verseText && verseNum.length <= 3) {
      result[verseNum] = verseText;
    }
  });

  const dir = './server/temp_bible';

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log(result);
  fs.writeFileSync(`${dir}/mt1.json`, JSON.stringify(result, null, 2));
};

scraper();
