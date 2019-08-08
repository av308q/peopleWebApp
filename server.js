require("dotenv").config();
//allows for environment variables 
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get("/api", (req, res) => {
  axios
    .get("https://api.salesloft.com/v2/people.json", {
      headers: {
        contentType: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`
        // allowing me to use key otherwise cors errors occure 
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Your server is running on: 8080!");
});