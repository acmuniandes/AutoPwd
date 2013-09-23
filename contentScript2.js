
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 11; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}



var usuario = "";
var passtemp = "";
var pass = "";
var mail = "";



chrome.storage.local.get("username", function (result) {
        usuario = result.username;
        $("[name=userfrm]").val(usuario);
});

chrome.storage.local.get("password", function (result) {
        pass = result.password;
        $("[name=password1]").val(pass);
        $("[name=password2]").val(pass);
});
chrome.storage.local.get("pwdtemp", function (result) {
        passtemp = result.pwdtemp;
        $("[name=password]").val(passtemp);
});

chrome.storage.local.get("mail", function (result) {
        mail = result.mail;
        $("[name=emailalterno]").val(mail);
});


var pwdtemp = makeid();
//alert(pwdtemp);
chrome.storage.local.set({"pwdtemp":pwdtemp});


setTimeout(submit, 1000);


function submit(){
    //if($("[name=userfrm]").val() != "" &&  $("[name=password]").val() != "" &&  $("[name=emailalterno]").val() != "" && $("[name=password1]").val() != "" &&  $("[name=password2]").val() == ""){
        $("[name=Cambiar]").click();
};


