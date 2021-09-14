var express = require("express");
var router = express.Router();
const axios = require("axios");
const dataFilter = require("../helpers/dataFilter");

/* GET home page. */
router.get("/", async (req, res) => {
  const response = await axios.get("https://api.oag.com/flights/?Limit=5", {
    headers: { "Subscription-Key": "251562bba0704e11b8a9fad1342c6ea6" },
  });
  const rawData = await response.data.data;
  res.json(dataFilter(rawData));
});

module.exports = router;
