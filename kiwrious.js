const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const CONNECTION_URL =
  'mongodb+srv://kiwriousUser:kiwriousPassword@kiwriouscluster.ddady.mongodb.net/kiwrious?retryWrites=true&w=majority';
const PORT = 5005;
let collection = null;

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.post('/api', (req, res) => {
  const data = req.body;
  //save the data in the database
  const dummyData = {
    data: '23/34/2005',
    location: 'kandy',
    sensorType: 'thermo',
    notes: null,
  };
  collection.insertOne(dummyData, (error, result) => {
    if (error) {
      console.log(error);

      //return response.status(500).send(error);
    }
    console.log(result.result);
    res.send(result.result);
  });
});

app.get('/api', (req, res) => {
  //get the data from database
  //send as a json response
  res.status(200).send(`server is up on ${PORT}`);
});

app.listen(PORT, () => {
  const client = new MongoClient(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect((err) => {
    if (err) {
      throw err;
    }
    collection = client.db('kiwrious').collection('kiwrious');
    console.log('Connected to database kiwrious!');
    console.log(`Server is started on port ${PORT}`);
    //client.close();
  });
});
