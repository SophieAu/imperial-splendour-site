// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async () => ({
  statusCode: 200,
  body: `2.0`,
});

module.exports = { handler };
