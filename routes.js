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
        pass: 'ctmyboahcqixociq'
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


async function send() {
  let ytlink = '';
  let tolist = 'sebgascoine@gmail.com, sovietangel5@gmail.com'; //replace with db
    const result = await transporter.sendMail({
        from: 'mylesfour20',
        bcc: 'sebgascoine@gmail.com, GummyMapleSyrupBacon@gmail.com, parkat701@gmail.com', //sovietangel5@gmail.com', //sovietangel5 is swag
        subject: "Sebastian's Music of The Day",
        html: await readFile('./public/views/emaildaily.html', 'utf8')
    });

    console.log(JSON.stringify(result, null, 4));
}

router.get("/request", function(req, res){
    send();
});

module.exports = router;
