


function cambiar(){

  alert("Se ha actualizado tu informacion");

  chrome.storage.local.set({"username": $('#usr').val()+"" });
  chrome.storage.local.set({"password": $('#pwd').val()+"" });
  chrome.storage.local.set({"mail": $('#mail').val()+"" });

};

function ejecutar() {
  var background = chrome.extension.getBackgroundPage();
  //alert(background);
  background.ejecutar();

}

$("#btnCambiar").bind("click", cambiar);
$("#btnExe").bind("click", ejecutar);


function actualizar(){

var usuario = "";
var pass = "";
var mail = "";



chrome.storage.local.get("username", function (result) {
  usuario = result.username;
  if(usuario)
    $('#usr').val(usuario+"");
  
        //alert(usuario);
      });

chrome.storage.local.get("password", function (result) {
  pass = result.password;
  if(pass)
    $('#pwd').val(pass+"");
    
    //alert(pass);
  });
chrome.storage.local.get("mail", function (result) {
    mail = result.mail;
    if(mail)
        $('#mail').val(mail+"");
    
      //  alert(mail);
    });

};

actualizar();
