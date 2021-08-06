const CustomError = require('./custom-error');

class DatabaseConnectionError extends CustomError {
  statusCode = 503;

  constructor() {
    super('Error connecting to Database');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serialize() {
    return [{ messege: this.message }];
  }
}

module.exports = DatabaseConnectionError;
/**this class is created to throw errors related to the database
 * by calling to this class we can create new DatabaseConnectionErrror
 * which exends the CustomError class we made
 * code reusablitiy is the main idea
 */
