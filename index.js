const express = require('express');
const smime = require('nodemailer-smime'); //smime encryp $$$
let path = require("path");
const app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const shared = require('./shared');
const routes = require('./routes');

const router = express.Router();

mongoose.connect('mongodb://127.0.0.1:27017/Music-Mail');

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static('./public'));
app.use(routes);

const port = 3000;
app.set('port', process.env.PORT || port);

server.listen(port);
console.log('Hosted on port ' + port);
