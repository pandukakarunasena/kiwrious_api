const mongoose = require('mongoose');
const app = require('./app');

const CONNECTION_URL =
  'mongodb+srv://kiwriousUser:kiwriousPassword@kiwriouscluster.ddady.mongodb.net/kiwrious?retryWrites=true&w=majority';
const PORT = 5005;
let collection = null;

/**creating a function to first connect ot the mongoDB instance
 * which is in another pod with a clusterIP service and after the creation
 * of the database then we start the port to direct traffic
 */
const start = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error(error);
  }

  app.listen(PORT, () => {
    console.log(`auth service is on port ${PORT}`);
  });
};

start();
