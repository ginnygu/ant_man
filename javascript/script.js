
var slideIndex = 1;
changes(slideIndex);

function plusDivs(n) {
  changes(slideIndex += n);
}
function changes(n) {
  var i;
  var x = document.getElementsByClassName('char');
  if (n > x.length) {
    slideIndex = 1
  }
  
  if (n < 1) {
    slideIndex = x.length 
  }
  var i = 0
  while(i < x.length){
    x[i].style.display = "none";
    i++;
  }
  
  x[slideIndex-1].style.display = "block";
}