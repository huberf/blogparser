// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var r = require('request');
function getUrl() {
  console.log("Getting URL");
  var url = 'http://blog.noahcodes.com/amazon-alexa-development/';
  var api = "http://54.149.145.79/api/v1/article?url=";
  r.get(api + url, (err, resp, body) => {
   var data = JSON.parse(body);
   document.getElementById('title').innerHTML = data.title;
   document.getElementById('content').innerHTML = data.body;
   return [data.title, data.body];
  })
}
