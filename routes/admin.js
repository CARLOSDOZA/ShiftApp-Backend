const express = require('express');

const adminController = require('../controllers/admin')

const router = express();

//GET /admin/shifts
router.get('/shifts', adminController.getShifts);

// POST /admin/shift
router.post('/shift', adminController.createShift);

// GET /admin/shift
router.get('/shift/:id', adminController.getShift);

// PUT /admin/shift/:id
router.put('/shift/:id', adminController.updateShift);

//DELETE /admin/shift/:id
router.delete('/shift/:id', adminController.deleteShift);

module.exports = router;