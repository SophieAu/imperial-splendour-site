/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

import 'isomorphic-fetch';

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

const handler = async () => {
  try {
    const version = await getVersion()
    return { statusCode: 200, headers, body: version }
  }
  catch (e) {
    return { statusCode: 500, headers }
  }
};

export default { handler };
