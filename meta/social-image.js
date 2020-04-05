/* eslint-disable @typescript-eslint/no-var-requires */

const { createHash } = require('crypto');
const { writeFile } = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');
const writeFileAsync = promisify(writeFile);

const renderCard = (title, authors = []) => {
  const authorPortraits = authors
    .map(
      auth =>
        `<img src="../../data/img/about/${auth}_portrait.png" style="padding-left:20px;width:150px;height:100%;"/>`
    )
    .join('');

  return `<head><link href="https://fonts.googleapis.com/css?family=IM+Fell+English&display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css?family=IM+Fell+English+SC&display=swap" rel="stylesheet" /></head><body style="margin:0"><div style="background-image: url(../../data/img/texture_bg.webp);width:1080px;height:510px;padding:60px;display: flex;flex-direction: column;justify-content: space-between;"><div style="display: flex;flex-direction: row;justify-content: space-between;"><img src="../../data/img/index/hero_logo.png" style="width:540px;"/><div>${authorPortraits}</div></div><p style="font-family: IM Fell English;font-size: 64px;height: 245px;margin:0;">${title}</p></div></body>`;
};

async function writeCachedFile(CACHE_DIR, key, contents, extension) {
  const hash = createHash('md5').update(key).digest('hex');

  const absolutePath = resolve(CACHE_DIR, `${hash}.${extension}`);
  await writeFileAsync(absolutePath, contents);
  return absolutePath;
}

/*
 * Takes a post (probably a Gatsby node of some kind), generates some HTML,
 * saves a screenshot, then returns the path to the saved image.
 */
exports.postToImage = async (CACHE_DIR, browser, post) => {
  const { title, author } = post.frontmatter;
  const html = renderCard(title, author);

  const imageFileExtension = 'png';

  const filePath = await writeCachedFile(CACHE_DIR, title, html, 'html');
  const page = await browser.newPage();

  await page.goto(`file://${filePath}`);
  await page.evaluateHandle('document.fonts.ready');
  await page.setViewport({ width: 1200, height: 630 });
  const file = await page.screenshot({ type: imageFileExtension });

  return writeCachedFile(CACHE_DIR, title, file, imageFileExtension);
};
