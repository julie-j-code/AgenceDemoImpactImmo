
function showMore() {

  var element = document.getElementById("myDIV");
  element.classList.toggle("hidden");

  var i = document.getElementById("sort");
  i.classList.toggle("fa-sort-up");
  document.querySelector("form").style.height = "auto"

}

function burger() {
  var x = document.getElementById("nav_items");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


