
const router = require("express").Router();



//var https = require('https');

var options = {
  'method': 'GET',
  'hostname': 'ebird.org',
  'path': '/ws2.0/data/obs/{{regionCode}}/recent',
  'headers': {
    'X-eBirdApiToken': '{{g4ehnsq0gtgp}}'
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();



   // // Gets google birders
    // search: function(query) {
    //   return axios.get("https://www.googleapis.com/birders/v1/volumes?q=" + query + "&projection=lite&maxResults=5");
    // },



    module.exports = router;