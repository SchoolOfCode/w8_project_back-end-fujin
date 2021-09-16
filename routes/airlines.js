const { Router } = require("express");
const router = new Router();

const {
  getAllAirlines,
  getAirlineById,
  deleteAirline,
  postAirline,
  updateAirline,
} = require("../models/airlines");

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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteAirline(id);
    res.json({
      success: true,
      message: `Deleted airline with id of ${id}`,
      payload: data,
    });
  } catch (error) {
    res.json({ success: false, message: `${error.name}: ${error.message}` });
  }
});

router.post("/", async (req, res) => {
  const { body } = req;
  try {
    const data = await postAirline(body);
    res.json({
      success: true,
      message: `Posted new airline`,
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
    const data = await updateAirline(id, body);
    res.json({
      success: true,
      message: `Updated airline with id of ${id}`,
      payload: data,
    });
  } catch (error) {
    res.json({ success: false, message: `${error.name}: ${error.message}` });
  }
});

module.exports = router;
