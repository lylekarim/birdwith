const router = require("express").Router();

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


router.post('/send-email', (req, res) => {

   // Route to post our form submission to Sendgrid
const { recipient, sender, topic, text, html } = req.body;

    //Sendgrid Data Requirements
    const msg = {
        to: recipient,
        from: sender,
        subject: topic,
        text: text,
        html: html,
    }

    //Send Email
    sgMail.send(msg)
        .then((msg) => console.log(text));
});
module.exports = router;