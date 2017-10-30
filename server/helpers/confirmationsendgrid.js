module.exports.sendconfirmationmail=function(toemail,username ,token){


var helper = require('sendgrid').mail;

var fromEmail = new helper.Email('ashikvpapanna@gmail.com');
var confirmationshtml=require('./confirmationshtml');
var toEmail = new helper.Email(toemail);
var subject = 'Sending with SendGrid is Fun';
console.log(appconfig.mailurl);
var content = new helper.Content('text/html',confirmationshtml(username,(process.env.SENDGRID_KEY||require('../../appconfig.js'))+token));
var mail = new helper.Mail(fromEmail, subject, toEmail, content);
 
var sg = require('sendgrid')(process.env.SENDGRID_KEY||require('../../appconfig.js').sendgridkey);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});
 


  sg.API(request, function (error, response) {
 
 
 

 
 
 })};