module.exports.sendconfirmationmail=function(toemail,username ,token){


var helper = require('sendgrid').mail;

var fromEmail = new helper.Email('ashikvpapanna@gmail.com');
var confirmationshtml=require('./confirmationshtml');
var toEmail = new helper.Email(toemail);
var subject = 'Sending with SendGrid is Fun';

var content = new helper.Content('text/html',confirmationshtml(username,(process.env.EMAIL_URL||require('../../appconfig.js').mailurl)+token));
//var content = new helper.Content('text/html','<h1>Hi</h1>');


var mail = new helper.Mail(fromEmail, subject, toEmail, content);
 
var sg = require('sendgrid')(process.env.SENDGRID_KEY||require('../../appconfig.js').sendgridkey);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});
 


  sg.API(request, function (error, response) {
 
 
 

 
 
 })};