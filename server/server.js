const app = require('./index');
// const { env } = require('../env/.env');

const port = 1128;

app.listen(port, () => console.log(`listening on ${port}`));

// module.exports = app;?
