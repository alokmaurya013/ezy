const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    name: String,
    budget: Number,
    leadsGenerated: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Campaign= mongoose.model('Campaign', CampaignSchema);
module.exports=Campaign;
