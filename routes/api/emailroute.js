const router = require("express").Router();

var dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 
var key = dotenv.load().parsed.SENDGRID_API_KEY;
sgMail.setApiKey(key);

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs



router.post('/', (req, res) => {

    console.log('REQREQREQREQREQ.body', JSON.stringify(req.body));

   // console.log('KEYKEYKEYKEY: ', key)

    // Route to post our form submission to Sendgrid
    const { to, from, subject, text,} = req.body;

    //Sendgrid Data Requirements
    const msg = {
        to: to,
        from: from,
        subject: subject,
        text: text,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',

    }

    //Send Email
    sgMail.send(msg);

    console.log('HIT!')
});

module.exports = router;