function ValidateEmail(inputText)
{
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
document.getElementById("subscribed").style.opacity=1;
document.getElementById("subscribed").style.zIndex=1;
document.form1.email.focus();
return true;
}
else
{
document.getElementById("alert").style.opacity=1;
document.form1.email.focus();
return false;
}
}
function closePopUp(){
    document.getElementById("subscribed").style.opacity=0;
    document.getElementById("subscribed").style.zIndex=0;
}