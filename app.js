const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const mobileAPI = require('./routes/mobile');
const webAPI = require('./routes/web');

const CONNECTION_URL =
  'mongodb+srv://kiwriousUser:kiwriousPassword@kiwriouscluster.ddady.mongodb.net/kiwrious?retryWrites=true&w=majority';
const PORT = 5005;
let collection = null;

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use('/mobile', mobileAPI);
app.use('/web', webAPI);

app.listen(PORT, (req, res) => {
  const client = new MongoClient(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect((err) => {
    if (err) {
      res.status(500).send(error);
      throw err;
    }
    collection = client.db('kiwrious').collection('kiwrious');
    console.log('Connected to database kiwrious!');
    console.log(`Server is started on port ${PORT}`);
  });
});
