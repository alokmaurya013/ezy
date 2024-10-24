const json2csv = require('json2csv').parse;
const fs = require('fs');

// Generate CSV report from data
const generateCSVReport = async (data, filename = 'report.csv') => {
    const csv = json2csv(data);
    fs.writeFileSync(filename, csv);  // Write CSV to file system
    return filename;  // Return filename to be used in reportController
};

module.exports = { generateCSVReport };
