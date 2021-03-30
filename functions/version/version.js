const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

const handler = async () => ({
  statusCode: 200,
  headers,
  body: `2.0`,
});

module.exports = { handler };
