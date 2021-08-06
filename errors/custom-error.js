class CustomError extends Error {
  statusCode;

  constructor(messege) {
    super(messege);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serialize() {}
}

module.exports = CustomError;

/**made this custom error class which extends the express ERROR
 * to have custom error templete..... think if we have an CUSTOM ERROR class
 * we can create instances from it and throw errors whenever we want and
 * it can be handled by the Express error handling middleware
 * this custom Error class is an abstract class and whatever the class
 * we extend this class should have this statusCode and the
 * serialization function inside of it.......
 */
