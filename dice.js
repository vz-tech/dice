// var min = 1;
// var max = 6;

// function diceSixResult() {
//     if (min == 1 && max == 6) {
//       return Math.floor(Math.random()*6 + 1);
// }
// }
//diceSixResult();

// function diceSixResult(max) {
//   if (typeof(max) === 'number') {
//     return Math.floor(Math.random()*max + 1);
//   }
// else console.log("This is an invalid value.")
// }
// diceSixResult(); 
// Tests if input is a number and enables output with any integer value

// function diceSixResult() {
//    var max = document.getElementById("myInput").value;
//    var maxConv = parseInt(max); //Converts string retrieved to int
//    if (typeof(maxConv) === 'number' && isFinite(max)) {
//      document.getElementById("output").innerHTML = Math.floor(Math.random()*maxConv + 1);
//    }
//    else document.getElementById("output").innerHTML = "This is not a valid number.";
//  }
// Preliminary Code


function diceSixResult() {
  var max = document.getElementById("myInput").value;
  if (!(/^\d+$/.test(max))) document.getElementById("output").innerHTML = "Please input a valid integer!";
  else document.getElementById("output").innerHTML = Math.floor(Math.random()*max + 1);
}