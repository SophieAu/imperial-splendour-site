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

const handler = async () => {
  try {
    const response = await fetch(VERSION_SOURCE)
    if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`)

    const responseText = await response.text();
    const version = responseText.trim()
    if (!version) throw new Error("Version is empty")

    return { statusCode: 200, headers, body: version }
  }
  catch (e) {
    console.log({ e });
    return { statusCode: 500, headers }
  }
};

export default { handler };
