const server = require('./index');

const router = require('./routes');

const port = 1128;

server.listen(port, () => console.log(`listening on ${port}`));
server.use('/shoedidas', router);
