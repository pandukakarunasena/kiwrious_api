const Express = require('express');
const BodyParser = require('body-parser');
const mobileAPI = require('./routes/mobile');
const webAPI = require('./routes/web');
const errorHandler = require('./middlewares/error-handler');
const NotfoundError = require('./errors/not-found-error');

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use('/mobile', mobileAPI);
app.use('/web', webAPI);

app.all('*', async (req, res, next) => {
  throw new NotfoundError();
});

//any Error which is thrown by the above middlewares is hadled by the Error handling middleware
app.use(errorHandler);

module.exports = app;
