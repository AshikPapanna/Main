module.exports.sendnotificationmail=function(toemail,username){


var helper = require('sendgrid').mail;

var fromEmail = new helper.Email('ashikvpapanna@gmail.com');
var notificationhtml=require('./notificationhtml');
var toEmail = new helper.Email(toemail);
var subject = 'Good Morning';

var content = new helper.Content('text/html',notificationhtml(username));



var mail = new helper.Mail(fromEmail, subject, toEmail, content);
 
var sg = require('sendgrid')(process.env.SENDGRID_KEY||require('../../appconfig.js').sendgridkey);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});
 


  sg.API(request, function (error, response) {
 
 
 

 
 
 })};