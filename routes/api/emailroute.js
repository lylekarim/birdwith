// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs


const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = (app) => {
    app.post('/api/send', function (req, res, next) {
    });
};

app.get('/send-email', (req, res) => {

    //Get Variables from query string in the search bar
    const { recipient, sender, topic, text, html } = req.query;

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