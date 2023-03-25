const path = require('path');
const express = require('express');
var nodemailer = require('nodemailer');

const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const router = express.Router();
const database = require('./shared').database;
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
        pass: 'jhxevqrwrknscfcx'
    }
});
/*                                                                                /
        /                                                         ,        /     /
    __ /    __    __  _/_      _  _    __   __   __                 _/_   /__   /
  /   /   /   ) /   ) /       / /  ) /___) (_ ` (_ `    | /| /  /   /    /   ) /
 (___/   (___/ /   / (_      / /  / (___  (__) (__)     |/ |/  /   (_   /   / o

*/

router.get("/",function(req,res) {
  res.sendFile(path.resolve(__dirname,"index.html"));
});
router.get("/daily",function(req,res) {
  res.sendFile(path.resolve(__dirname,"/public/views/emaildaily.html"));
});
router.get("/weekly",function(req,res) {
  res.sendFile(path.resolve(__dirname,"/public/views/emailweekly.html"));
});
router.get('/login', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/public/setup/login.html'));
});

router.get('/signup', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/public/setup/signup.html'));
});




router.get('/test', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/public/setup/test.html'));
});




//daily email
async function send1() {
  let ytlink = '';
  let tolist = 'sebgascoine@gmail.com, sovietangel5@gmail.com'; //replace with db
    const result = await transporter.sendMail({
        from: 'mylesfour20',
        bcc: 'sebgascoine@gmail.com', //, GummyMapleSyrupBacon@gmail.com, zacharydg333@gmail.com, sovietangel5@gmail.com, samjamhamlamb@gmail.com, //sovietangel5 is swag
        subject: "Sebastian's Music of The Day",
        html: await readFile('./public/views/emaildaily.html', 'utf8')
    });

    console.log(JSON.stringify(result, null, 4));
}
//Weekly email
async function send2() {
  let ytlink = '';
  let tolist = 'sebgascoine@gmail.com, sovietangel5@gmail.com'; //replace with db
    const result = await transporter.sendMail({
        from: 'mylesfour20',
        bcc: 'sebgascoine@gmail.com, GummyMapleSyrupBacon@gmail.com, samjamhamlamb@gmail.com', //, sovietangel5@gmail.com is swag , zacharydg333@gmail.com
        subject: "Sebastian's Music of The Week",
        html: await readFile('./public/views/emailweekly.html', 'utf8')
    });

    console.log(JSON.stringify(result, null, 4));
}
router.get("/request1", function(req, res){
    send1();
});
router.get("/request2", function(req, res){
    send2();
});

module.exports = router;
