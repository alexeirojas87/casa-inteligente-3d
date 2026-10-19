// Renders the app icons (PNG) from web/icons/icon.svg. Usage: node icons.mjs
import puppeteer from 'puppeteer-core';
import { readFileSync } from 'node:fs';

const svg = readFileSync('web/icons/icon.svg', 'utf8');
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
const page = await browser.newPage();
for (const size of [180, 192, 512]) {
  await page.setViewport({ width: size, height: size });
  await page.setContent(`<style>html,body{margin:0}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`);
  await page.screenshot({ path: `web/icons/icon-${size}.png` });
}
await browser.close();
console.log('icons ready');
