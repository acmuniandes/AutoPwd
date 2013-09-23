
function actualizar2(){
  $('#usr').val(localStorage.getItem("username"));
  $('#pwd').val(localStorage.getItem("password"));
  $('#mail').val(localStorage.getItem("email"));
};
 
function cambiar2(){
  localStorage.setItem("username", $('#usr').val());
  localStorage.setItem("password", $('#pwd').val());
  localStorage.setItem("email", $('#mail').val());
  actualizar();
};




function ejecutar(){

  partA();
  
//  partA(function() {

//    partB();

//  });
};


var indiceFinal;
function partA(){
  var newtab;
  chrome.tabs.query({url:"https://cuenta.uniandes.edu.co/Cuenta/cambioclave.jsp"}, function(tabs){
    var i = 0;
    actual = tabs[i];
    while(actual){
      chrome.tabs.remove(actual.id);
      i++;
      actual = tabs[i];
    }
  });
  chrome.tabs.create({url: 'https://cuenta.uniandes.edu.co/Cuenta/cambioclave.jsp'});
  chrome.tabs.query({url:"https://cuenta.uniandes.edu.co/Cuenta/cambioclave.jsp", active: true, currentWindow:true}, function(tabs){
    tab = tabs[0];
    tabID = tab.id;
    indiceFinal = tab.index;
    chrome.tabs.executeScript(tabID, {file: "jquery.js"});
    chrome.tabs.executeScript(tabID, {file: "contentScript.js"});
    newtab = tab;
  });
  setTimeout(partB,2500); 
};

function partB(){

  chrome.tabs.create({url: 'https://cuenta.uniandes.edu.co/Cuenta/cambioclave.jsp'});
  chrome.tabs.query({index: indiceFinal+1, currentWindow:true}, function(tabs){
    chrome.tabs.executeScript(tabs[0].id, {file: "jquery.js"});
    chrome.tabs.executeScript(tabs[0].id, {file: "contentScript2.js"});  
  });
  
}


