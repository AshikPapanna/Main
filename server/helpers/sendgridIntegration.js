var helper = require('sendgrid').mail;
var fs = require('fs');

var bitmap = fs.readFileSync('../../public/images/gravatar.jpg');
// convert binary data to base64 encoded string
var a= new Buffer(bitmap).toString('base64');

var appconfig=require('../../appconfig');
var fromEmail = new helper.Email('ashikvpapanna@gmail.com','Team Sarang');
var toEmail = new helper.Email('ashikvp1993@gmail.com');
var attachement=new helper.Attachment();
attachement.setContent(a);
attachement.setContentId('hd1');
attachement.setFilename('gravatar.jpg')
attachement.setType('image/jpg');

var subject = 'Sending with SendGrid is Fun';
var content = new helper.Content('text/html', '<h1>and easy to do anywhere, even with Node.js</h1>'+
'<img alt="dsfdf" src="data:image/jpg;base64,'+a+'"/>');
var mail = new helper.Mail(fromEmail, subject, toEmail, content);

var att=new helper.Attachment();
att.setContent()

var sg = require('sendgrid')(appconfig.sendgridkey);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',  
  body: mail.toJSON(),  
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