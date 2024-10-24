const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
    name: String,
    email: String,
    status: String,  // e.g., 'converted', 'pending'
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Lead= mongoose.model('Lead', LeadSchema);
module.exports=Lead;
