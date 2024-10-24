const Campaign = require('../models/Campaign.js');
const { fetchDummyCampaigns } = require('../services/dummyData.js');

// Fetch dummy campaigns and store them in the database
const getCampaigns = async (req, res) => {
    try {
        const campaigns = await fetchDummyCampaigns();
        await Campaign.insertMany(campaigns);  // Save campaigns to MongoDB
        res.status(200).json({ success: true, data: campaigns });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error', error: err.message });
    }
};

module.exports = { getCampaigns };
