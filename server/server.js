const app = require('./index');
const { env } = require('../env/.env');

const port = env.PORT;

app.listen(port, () => console.log(`listening on ${port}`));

// module.exports = app;?
