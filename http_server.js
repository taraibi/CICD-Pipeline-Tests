const express = require('express');
const app = express();



let port = process.env.PORT || 3000;



app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


// start server
// -----------------------
app.listen(port, function () {
    console.log(`Running on port ${port}`);
});
