// var table = document.getElementById("myTable");
var table = document.getElementsByTagName('table')[0];
var cell = table.getElementsByTagName('td');
var col, wh, lG;
table.addEventListener('click', function(e) {
  col = window.getComputedStyle(e.target, null).backgroundColor;
  if (e.target.tagName === "TD") {
    wh = 'rgba(0, 0, 0, 0)';
    lG = 'rgb(144, 238, 144)';
    if (col === wh) {
      e.target.style.backgroundColor = lG;
    } else {
      e.target.style.backgroundColor = wh;
    }
  }
}, false);
