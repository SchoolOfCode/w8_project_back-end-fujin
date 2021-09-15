const { Router } = require('express');
const router = new Router();

var cors = require('cors')
router.options('*', cors())

const {
  getAllAirports,
  getAirportsByCity,
  getAirportById,
} = require('../models/airports');



// Get by city name
router.get('/', cors(), async (req, res, next) => {
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

router.get('/', cors(), async (req, res) => {
  try {
    const data = await getAllAirports();
    res.json({
      success: true,
      message: 'All airports',
      payload: data,
    });
  } catch (error) {
    res.json({ success: false, message: `${error.name}: ${error.message}` });
  }
});

router.get('/:id', cors(), async (req, res) => {
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

module.exports = router;
