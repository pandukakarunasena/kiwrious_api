const CustomError = require('./custom-error');

class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(messege) {
    super(messege);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serialize() {
    return [{ messege: this.message }];
  }
}

module.exports = BadRequestError;
