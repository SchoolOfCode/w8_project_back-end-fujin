var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async (req, res) => {
  const response = await axios.get(
      "https://api.oag.com/flights/?Limit=5",
      {headers: {"Subscription-Key": "251562bba0704e11b8a9fad1342c6ea6", "Cache-Control": "no-cache"
    }}
  );
  const rawData = await response.data;
  // const cleanData = 
  res.json(cleanData);
  })

module.exports = router;
