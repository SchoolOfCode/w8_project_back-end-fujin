const { Router } = require("express");
const router = new Router();

const { getAllAirlines, getAirlineById } = require("../models/airlines");

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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getAirlineById(id);
    res.json({
      success: true,
      message: `Airline with id of ${id}`,
      payload: data,
    });
  } catch (error) {
    res.json({ success: false, message: `${error.name}: ${error.message}` });
  }
});

module.exports = router;
