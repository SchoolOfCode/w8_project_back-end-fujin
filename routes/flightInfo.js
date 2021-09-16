var express = require("express");
var router = express.Router();
const axios = require("axios");
const dataFilter = require("../helpers/dataFilter");
const fetchFromOAG = require("../helpers/fetchFromOAG");

var cors = require('cors')
router.options('*', cors())

router.get("/", cors(), async (req, res) => {
  let rawData;
  try {
    rawData = await fetchFromOAG(req.query);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
    return;
  }
  const cleanData = dataFilter(rawData);

    res.status(200).json({
      success: true,
      message: `List of suitable flights`,
      payload: cleanData,
    });
  
});

module.exports = router;
