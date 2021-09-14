const { Router } = require("express");
const router = new Router();

const { getAllAirlines } = require("../models/airlines");

router.get("/", async (req, res) => {
  try {
    const data = await getAllAirlines();
    res.json({
      success: true,
      message: "All airlines",
      payload: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `${error.name}: ${error.message}`,
    });
  }
});

module.exports = router;
