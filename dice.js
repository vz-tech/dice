function diceSixResult() {
  var max = document.getElementById("myInput").value;
  if (!(/^\d+$/.test(max))) document.getElementById("output").innerHTML = "Please input a valid integer!";
  else document.getElementById("output").innerHTML = Math.floor(Math.random()*max + 1);
}
