const express = require('express');
const { generateReport } = require('../controllers/reportController');
const router = express.Router();

// Route to generate a CSV report
router.get('/csv', generateReport);

module.exports = router;
