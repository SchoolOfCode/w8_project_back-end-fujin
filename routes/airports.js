const { Router } = require('express');
const router = new Router();

const { getAllAirports } = require('../models/airports');

router.get('/', async (req, res) => {
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

module.exports = router;
