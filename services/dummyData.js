// Simulated CRM and Marketing data
const fetchDummyLeads = () => {
    return [
        { name: 'John Doe', email: 'john@example.com', status: 'converted' },
        { name: 'Jane Smith', email: 'jane@example.com', status: 'pending' }
        // Add more dummy leads
    ];
};

const fetchDummyCampaigns = () => {
    return [
        { name: 'Spring Sale', budget: 1000, leadsGenerated: 120 },
        { name: 'Winter Promo', budget: 1500, leadsGenerated: 200 }
        // Add more dummy campaigns
    ];
};

module.exports = { fetchDummyLeads, fetchDummyCampaigns };
