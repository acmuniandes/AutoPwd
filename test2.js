  alert("hola");

   chrome.tabs.getCurrent(function(tab) {
    alert(tab);
    chrome.tabs.remove(tab.id);
  });