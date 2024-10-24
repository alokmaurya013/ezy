const { generateCSVReport } = require('../utils/reportGenerator');
const Lead = require('../models/Lead');

const generateReport = async (req, res) => {
    try {
        const leads = await Lead.find();  // Get all leads from MongoDB
        const csvFile = await generateCSVReport(leads, 'leads_report.csv');
        
        res.download(csvFile);  // Send the CSV file to the client
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error generating report', error: err.message });
    }
};

module.exports = { generateReport };
