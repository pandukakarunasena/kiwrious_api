const CustomError = require('../errors/custom-error');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serialize() });
  }

  return res
    .sendStatus(400)
    .send({ errors: [{ messege: 'Something went wrong' }] });
};

module.exports = errorHandler;
