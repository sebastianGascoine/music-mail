const express = require('express');
let path = require("path");
const app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*                                                                                /
        /                                                         ,        /     /
    __ /    __    __  _/_      _  _    __   __   __                 _/_   /__   /
  /   /   /   ) /   ) /       / /  ) /___) (_ ` (_ `    | /| /  /   /    /   ) /
 (___/   (___/ /   / (_      / /  / (___  (__) (__)     |/ |/  /   (_   /   / o

*/
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mylesfour20',
        pass: 'ctmyboahcqixociq'
    }
});
/*                                                                                /
        /                                                         ,        /     /
    __ /    __    __  _/_      _  _    __   __   __                 _/_   /__   /
  /   /   /   ) /   ) /       / /  ) /___) (_ ` (_ `    | /| /  /   /    /   ) /
 (___/   (___/ /   / (_      / /  / (___  (__) (__)     |/ |/  /   (_   /   / o

*/

async function send() {
  let ytlink = '';
  let tolist = 'sebgascoine@gmail.com, sovietangel5@gmail.com';
    const result = await transporter.sendMail({
        from: 'mylesfour20',
        to: 'sebgascoine@gmail.com, sovietangel5@gmail.com', //sovietangel5 is swag
        subject: "Sebastian's Music of The Day",
        html: '<h1>This is actually works lets go</h1><p>youtube link https://youtu.be/AV35kLG0Qas</p>'
    });

    console.log(JSON.stringify(result, null, 4));
}



app.get("/",function(req,res) {
  res.sendFile(path.resolve(__dirname,"index.html"));
});

app.get("/request", function(req, res){
    send();
});

app.listen(3000,function() {
  console.log("started on port 3000");
});

//YEE old code
/*
var transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
  auth: {
    user: email + '@gmail.com',
    pass: passw
  }
});

var mailOptions = {
  from: email + '@gmail.com',
  to: 'sebgascoine@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
//  text: 'That was easy!\nHere is a second line.'
//  html: '<h1>Welcome</h1><p>That was easy!</p>'
};
*/
