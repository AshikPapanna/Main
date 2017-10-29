module.exports.sendconfirmationmail=function(toemail,username ,token){


var helper = require('sendgrid').mail;
var appconfig=require('../../appconfig');
var fromEmail = new helper.Email('ashikvpapanna@gmail.com');
var confirmationshtml=require('./confirmationshtml');
var toEmail = new helper.Email(toemail);
var subject = 'Sending with SendGrid is Fun';
console.log(appconfig.mailurl);
var content = new helper.Content('text/html',confirmationshtml(username,appconfig.mailurl+token));
var mail = new helper.Mail(fromEmail, subject, toEmail, content);
 
var sg = require('sendgrid')(appconfig.sendgridkey);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});
 


  sg.API(request, function (error, response) {
 
 
 

 
 
 })};