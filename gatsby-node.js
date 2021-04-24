/* eslint-disable @typescript-eslint/no-var-requires */
const puppeteer = require('puppeteer');
const {
  PAGES_QUERY,
  buildBlogListPagination,
  buildBlogPosts,
  buildFactionPages,
  buildTermsOfService,
} = require('./meta/node');

let browser = null;

exports.onPreInit = async () => {
  browser = await puppeteer.launch({ headless: true });
};

exports.onPostBuild = async () => {
  await browser.close();
};

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(PAGES_QUERY);
  if (result.errors) return;

  console.log('\nCreating Blog Posts...');
  buildBlogPosts(result.data.posts.edges, actions.createPage);

  console.log('\nCreating Terms of Service...');
  buildTermsOfService(result.data.pages.edges, actions.createPage);

  console.log('\nPaginating Blog Posts List...');
  buildBlogListPagination(result.data.posts.edges, actions.createPage);

  console.log('\nCreating Faction Pages...');
  buildFactionPages(result.data.factions.edges, actions.createPage);

  console.log();
};
