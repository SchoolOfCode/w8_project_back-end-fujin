const axios = require("axios");

async function fetchFromOAG(params) {
  const response = await axios.get(`https://api.oag.com/flights`, {
    headers: { "Subscription-Key": process.env.SUBSCRIPTIONKEY },
    params: params,
  });
  return await response.data.data;
}

module.exports = fetchFromOAG;
