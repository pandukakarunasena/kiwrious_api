const CustomError = require('./custom-error');

class NotfoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Page not found');

    Object.setPrototypeOf(this, NotfoundError.prototype);
  }
  serialize() {
    return [{ messege: this.message }];
  }
}

module.exports = NotfoundError;
