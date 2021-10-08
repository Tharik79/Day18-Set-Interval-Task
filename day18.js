
var i = 0;
function change() {
  var x = document.getElementById("background");
  var color = ["teal", "skyblue", "violet"];
  x.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 2000);

