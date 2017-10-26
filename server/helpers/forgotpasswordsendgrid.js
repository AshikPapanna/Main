module.exports.sendconfirmationmail=function(toemail,username ,token){


var helper = require('sendgrid').mail;
var appconfig=require('../../appconfig');
var forgotpasswordhtml=require('./forgotpasswordhtml');
var fromEmail = new helper.Email('ashikvpapanna@gmail.com');
var toEmail = new helper.Email(toemail);
var subject = 'Sending with SendGrid is Fun';
var content = new helper.Content('text/html',forgotpasswordhtml(username,appconfig.mailurl+token));
var mail = new helper.Mail(fromEmail, subject, toEmail, content);
 
var sg = require('sendgrid')(appconfig.sendgridkey);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});
 
 sg.API(request, function (error, response) {

 })};