var helper = require('sendgrid').mail;
var appconfig=require('../../appconfig');
var fromEmail = new helper.Email('ashikvpapanna@gmail.com');
var toEmail = new helper.Email('ashikvp1993@gail.com');
var subject = 'Sending with SendGrid is Fun';
var content = new helper.Content('text/html', '<h1>and easy to do anywhere, even with Node.js</h1>');
var mail = new helper.Mail(fromEmail, subject, toEmail, content);
 
var sg = require('sendgrid')(appconfig.sendgridkey);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});
 
sg.API(request, function (error, response) {
  if (error) {
    console.log('Error response received');
    console.log(error);
  }
  console.log(process.env.NODE_ENV);
  //console.log(response.statusCode);
 // console.log(response.body);
 // console.log(response.headers);
});