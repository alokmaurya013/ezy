# EzyMetrics Backend - Data Integration and Reporting API

## Overview
This project is a backend service focused on data integrations, ETL processing, and reporting for a CRM and marketing platform. It simulates the fetching of leads and campaign data, processes the data, and provides reports via an API. The system also includes an alert mechanism that triggers email notifications based on certain conditions.

## Features
- **API Service Development:**
  - Fetch dummy lead and campaign data from simulated CRM and marketing platforms.
  
- **Data Storage and Processing:**
  - Data is stored in MongoDB (or any other preferred database).
  - ETL process transforms raw data into meaningful metrics.

- **Reporting and Alerts:**
  - Generate reports (PDF/CSV) via API.
  - Trigger email alerts when predefined conditions are met.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ezy-backend.git
   cd ezy-backend
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Create a `.env` file**:
   Copy the example `.env.example` file and set your own environment variables.
   ```bash
   cp .env.example .env
   ```

   **.env example**:
   ```bash
   PORT=5000
   MONGO_URI=your-mongodb-uri
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASS=your-email-password
   ```

4. **Run the server**:
   ```bash
   npm start
   ```

   The backend API will now be running on `http://localhost:5000`.

---

## API Endpoints

### 1. **Fetch Campaigns**
   Fetch dummy campaigns from the marketing platform.

   **Endpoint**: `GET /api/campaigns`

   **Response**:
   ```json
   [
     {
       "_id": "campaign_id",
       "name": "Campaign Name",
       "leads": 150,
       "conversionRate": 2.5,
       "status": "active"
     },
     ...
   ]
   ```

### 2. **Fetch Leads**
   Fetch dummy leads from the CRM platform.

   **Endpoint**: `GET /api/leads`

   **Response**:
   ```json
   [
     {
       "_id": "lead_id",
       "name": "Lead Name",
       "email": "lead@example.com",
       "phone": "1234567890",
       "status": "interested"
     },
     ...
   ]
   ```

### 3. **Generate Report (PDF/CSV)**
   Generate a report based on the campaign and lead data.

   **Endpoint**: `GET /api/reports`

   **Query Parameters**:
   - `format`: Specify the report format (`pdf` or `csv`).

   **Response**:
   - Returns a downloadable report in the requested format.

### 4. **Email Alerts**
   Send email notifications when certain campaign conditions are met.

   **Endpoint**: Automatically triggered (you can specify the conditions in the code).

---

## Database
This project uses **MongoDB** for storing lead and campaign data. Ensure that your MongoDB connection URI is provided in the `.env` file.

---

## ETL Process
The ETL (Extract, Transform, Load) process fetches raw data from the CRM/Marketing platform, transforms it into useful metrics, and stores it in the database for reporting.

---

## Email Notifications
To set up email notifications, provide the correct SMTP server information in the `.env` file. The system will trigger email alerts when certain campaign conditions are met.

---

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **Nodemailer** (for email alerts)
- **PDFKit** / **CSV Writer** (for generating reports)

---

## Future Enhancements
- Real-time data fetching from live APIs.
- Advanced reporting with customizable filters.
- Better alert management and notification settings.

---
## License
This project is licensed under the MIT License. See the LICENSE file for details.
---
## Author
Alok Maurya - Full Stack Developer
