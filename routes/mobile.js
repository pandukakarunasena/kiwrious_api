const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const data = req.body;
  //save the dummyData for testing
  //validate the data

  const dummyData = {
    userId: '324asd',
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

// mobile/ ==> get data
router.get('/', (req, res) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
  });
});

module.exports = router;
