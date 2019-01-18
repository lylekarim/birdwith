const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors'); 


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Define API routes here
// Add routes, both API and view
app.use(routes);



//cors for sendgrid
app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/birders");



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
