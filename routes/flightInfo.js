var express = require("express");
var router = express.Router();
const axios = require("axios");
const dataFilter = require("../helpers/dataFilter");

router.get("/", async (req, res) => {
  const { departureAirport, arrivalAirport, date } = req.query;
  const response = await axios.get( // move to helper functions
    `https://api.oag.com/flights/?DepartureAirport=${departureAirport}&ArrivalAirport=${arrivalAirport}&DepartureDate=${date}`, // params
    {
      headers: { "Subscription-Key": "251562bba0704e11b8a9fad1342c6ea6" }, //environment variable
    }
  );
  const rawData = await response.data.data; // error handling
  const cleanData = dataFilter(rawData);
  if (cleanData.length === 0) { // === 0 {}
    res.status(404).json({
      success: false,
      message: "No suitable flights available",
    });
  } else {
    res.status(200).json({
      success: true,
      message: `List of suitable flights from the airport ${departureAirport} to the airport ${arrivalAirport} on the date ${date}`,
      payload: cleanData,
    });
  }
});

module.exports = router;
