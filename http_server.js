const express = require('express');
const app = express();
const cors = require('cors');

// allow cross-origin resource sharing (CORS)
app.use(cors());


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


// start server
// -----------------------
app.listen(port, function () {
    console.log(`Running on port ${port}`);
});
