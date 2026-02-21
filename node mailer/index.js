var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.mail.yahoo.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "rec@mail.com",
    pass: "xxxxxxxxxxxxxxxxxxxxx",
  },
});

var mailOptions = {
  from: 'rec@mail.com',
  to: 'dest@mail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

/*
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
*/