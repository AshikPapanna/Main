var helper = require('sendgrid').mail;
var appconfig=require('../../appconfig');
var fromEmail = new helper.Email('ashikvpapanna@gmail.com','Team Sarang');
var toEmail = new helper.Email('ashikvp1993@gmail.com');
var subject = 'Sending with SendGrid is Fun';
var content = new helper.Content('text/html', '<h1>and easy to do anywhere, even with Node.js</h1>'+
'<style>@import url(https://fonts.googleapis.com/css?family=Comfortaa|Exo+2|Kanit|Righteous)</style>'+
'<div style="background-color:#581845;padding:0.25%;padding-left: 2%;"> <h1 style="font-family: Verdana, Arial, Helvetica, sans-serif;"><span style="color:white;">S&#x0101;rang</span></h1>');
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
  console.log(response);
  //console.log(response.statusCode);
 // console.log(response.body);
 // console.log(response.headers);
});