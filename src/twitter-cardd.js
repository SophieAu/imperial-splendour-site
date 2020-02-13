/* eslint-disable @typescript-eslint/no-var-requires */

const { createHash } = require('crypto');
const { writeFile } = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');
const writeFileAsync = promisify(writeFile);

const renderCard = title =>
  `<head><link href="https://fonts.googleapis.com/css?family=IM+Fell+English&display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css?family=IM+Fell+English+SC&display=swap" rel="stylesheet" /></head><body style="margin:0"><div style="background-image: url(../../data/img/texture_bg.webp);width:1200px;height:600px;padding:60px;display: flex;flex-direction: column;justify-content: space-between;"><div style="display: flex;flex-direction: row;justify-content: space-between;"><img src="../../data/img/index/hero_logo.png" style="width:540px;"/><img src="../../data/img/about/QHH_portrait.png" style="width:150px;height:100%;"/></div><p style="font-family: IM Fell English;font-size:80px;height:230px">${title}</p></div></body>`;

async function writeCachedFile(CACHE_DIR, key, contents, extension) {
  const hash = createHash('md5')
    .update(key)
    .digest('hex');

  const absolutePath = resolve(CACHE_DIR, `${hash}.${extension}`);
  await writeFileAsync(absolutePath, contents);
  return absolutePath;
}

/*
 * Returns the path to an image generated from the provided HTML.
 */
async function screenshotHTMLCard(CACHE_DIR, browser, title, html) {
  const imageFileExtension = 'png';

  const filePath = await writeCachedFile(CACHE_DIR, title, html, 'html');
  const page = await browser.newPage();

  await page.goto(`file://${filePath}`);
  await page.evaluateHandle('document.fonts.ready');
  await page.setViewport({ width: 1280 + 2 * 60, height: 669 + 2 * 60 });
  const file = await page.screenshot({ type: imageFileExtension });

  return writeCachedFile(CACHE_DIR, title, file, imageFileExtension);
}

/*
 * Takes a post (probably a Gatsby node of some kind), generates some HTML,
 * saves a screenshot, then returns the path to the saved image.
 */
exports.postToImage = async (CACHE_DIR, browser, post) => {
  const title = post.frontmatter.title;
  const html = renderCard(title);
  return screenshotHTMLCard(CACHE_DIR, browser, title, html);
};
