const express = require('express');

const adminController = require('../controllers/admin')

const router = express();

//GET /admin/shifts
router.get('/shifts', adminController.getShifts);

//POST /admin/shift
router.post('shift', adminController.createShift);

module.exports = router;