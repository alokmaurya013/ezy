const nodemailer = require('nodemailer');

const sendEmailAlert = async (subject, text) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alokma895754@gmail.com',
            pass: ''
        }
    });

    let mailOptions = {
        from: 'alokma895754@gmail.com',
        to: 'alokma895754@example.com',
        subject: subject,
        text: text
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendEmailAlert };
