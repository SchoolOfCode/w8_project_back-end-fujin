const { Router } = require("express");
const router = new Router();

var cors = require("cors");
router.options("*", cors());

const {
  getAllAirports,
  getAirportsByCity,
  getAirportById,
  deleteAirport,
  postAirport,
  updateAirport,
} = require("../models/airports");

router.get("/:id", cors(), async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getAirportById(id);
    res.json({
      success: true,
      message: `Airport with id of ${id}`,
      payload: data,
    });
  } catch (error) {
    res.json({ success: false, message: `${error.name}: ${error.message}` });
  }
});

router.get("/", cors(), async (req, res, next) => {
  const { query } = req;
  if (!query.city) {
    return next();
  }

  try {
    const data = await getAirportsByCity(query.city);
    res.json({
      success: true,
      message: `All airports in ${query.city}`,
      payload: data,
    });
  } catch (error) {
    res.json({ success: false, message: `${error.name}: ${error.message}` });
  }
});

router.get("/", cors(), async (req, res) => {
  try {
    const data = await getAllAirports();
    res.json({
      success: true,
      message: "All airports",
      payload: data,
    });
  } catch (error) {
    res.json({ success: false, message: `${error.name}: ${error.message}` });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteAirport(id);
    res.json({
      success: true,
      message: `Deleted airport with id of ${id}`,
      payload: data,
    });
  } catch (error) {
    res.json({ success: false, message: `${error.name}: ${error.message}` });
  }
});

router.post("/", async (req, res) => {
  const { body } = req;
  try {
    const data = await postAirport(body);
    res.json({
      success: true,
      message: `Posted new airport`,
      payload: data,
    });
  } catch (error) {
    res.json({ success: false, message: `${error.name}: ${error.message}` });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const data = await updateAirport(id, body);
    res.json({
      success: true,
      message: `Updated airport with id of ${id}`,
      payload: data,
    });
  } catch (error) {
    res.json({ success: false, message: `${error.name}: ${error.message}` });
  }
});

module.exports = router;
