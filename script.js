
function showMore() {

  var element = document.getElementById("myDIV");
  element.classList.toggle("hidden");

  var i = document.getElementById("sort");
  i.classList.toggle("fa-sort-up");
  document.querySelector("form").style.height = "auto";
}

function burger() {
  var x = document.getElementById("nav_items");
  var swith_nav = document.getElementById("nav_toggler");
  var w = window.innerWidth;

  swith_nav.classList.toggle("fa-xmark")
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else if(x.style.display="none"){
    x.style.display="flex"
  };
  }  


function myFunction() {
  var x = document.getElementById("nav_items");
  var w = window.innerWidth;
  if(w>768){x.style.display = "flex"}else{x.style.display ="none"};
}

