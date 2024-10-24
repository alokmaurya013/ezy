const express = require('express');
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');
const campaignRoutes = require('./routes/campaignRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());  // Middleware to parse JSON

// Routes
app.use('/api/leads', leadRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/reports', reportRoutes);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
