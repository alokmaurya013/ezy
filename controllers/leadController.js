const Lead = require('../models/Lead');
const { fetchDummyLeads } = require('../services/dummyData');

// Fetch dummy leads and store them in the database
const getLeads = async (req, res) => {
    try {
        const leads = await fetchDummyLeads();
        await Lead.insertMany(leads);  // Save leads to MongoDB
        res.status(200).json({ success: true, data: leads });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error', error: err.message });
    }
};

module.exports = { getLeads };
