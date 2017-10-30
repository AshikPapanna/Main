

module.exports=forgotpasswordmailcontent=function( username,link){ 
 return '<p>Hey '+username+'</p></br><p>We have received a request to reset your <company name> account password. Please click this</p>'+ 
'<p>'+link+'</p>'+ 
'<p>to validate. You will be redirected to the account recovery page. Kindly use this <password>  to reset.</p>'+
'<p>Love</p><br><p>The SÃRANG Team</p>'
}
