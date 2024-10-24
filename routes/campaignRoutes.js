const express = require('express');
const { getCampaigns } = require('../controllers/campaignController');
const router = express.Router();

// Route to fetch campaign data
router.get('/', getCampaigns);

module.exports = router;
