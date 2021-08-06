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

router.get('/', (req, res) => {
  //take the parameters from url
  const date1 = req.params.date1;
  const date2 = req.params.date2;
  const sensorType = req.params.sensorType;

  //get the values according to the url
  //date range and sensor type
  collection.find({}).toArray((error, result) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(result);
  });
});

module.exports = router;
