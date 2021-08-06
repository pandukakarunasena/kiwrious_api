const express = require('express');
const router = express.Router();

//one endpoint to get the data
//filter with the date and sensor type
//query parameters

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use((req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.post('/', (req, res) => {
  const data = req.body;
  //save the dummyData for testing
  //validate the data

  const dummyData = {
    userId: '65764465',
    data: '23/34/2005',
    location: 'kandy',
    sensorType: 'thermo',
    notes: null,
  };

  collection.insertOne(dummyData, (error, result) => {
    if (error) {
      console.log(error);
      return response.status(500).send(error);
    }
    console.log(result.result);
    res.send(result.result);
  });
});

router.get('/', (req, res) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
  });
});

module.exports = router;
