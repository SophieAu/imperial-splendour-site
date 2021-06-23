/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

require('isomorphic-fetch');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

const VERSION_SOURCE =
  'https://raw.githubusercontent.com/SophieAu/imperial-splendour-launcher/master/version.txt';

const getVersion = async () => {
  try {
    const response = await (await fetch(VERSION_SOURCE)).text();
    return response.trim();
  } catch (e) {
    console.log({ e });
  }
};

const handler = async () => ({
  statusCode: 200,
  headers,
  body: getVersion(),
});

module.exports = { handler };
