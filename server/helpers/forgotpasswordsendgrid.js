module.exports.sendconfirmationmail=function(toemail ,token){


var helper = require('sendgrid').mail;
//var appconfig=require('../../appconfig');
var fromEmail = new helper.Email('ashikvpapanna@gmail.com');
var toEmail = new helper.Email(toemail);
var subject = 'Sending with SendGrid is Fun';

var content = new helper.Content('text/html', '<h1>and easy to do anywhere, http://localhost:5000/profiles;tokenId='+token+' even with Node.js</h1>');
var mail = new helper.Mail(fromEmail, subject, toEmail, content);
 
var sg = require('sendgrid')(process.env.SENDGRID_KEY||require('../../appconfig.js').sendgridkey);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});
 
 sg.API(request, function (error, response) {

 })};