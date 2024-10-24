const express = require('express');
const { getLeads } = require('../controllers/leadController');
const router = express.Router();

// Route to fetch leads data
router.get('/', getLeads);

module.exports = router;
