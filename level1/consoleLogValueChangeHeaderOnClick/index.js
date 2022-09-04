// let uname = document.querySelector("#inputBox");
//       function send() {
//         console.log(inputBox.value);
//       }

// function logValue() {
//   let renderText = inputBox.value
//   console.log(inputBox.value)
//   return document.getElementById("varyingHeader").innerHTML = renderText
// }


let someText = document.querySelector("#inputBox");

const htmlButton = document.querySelector("#magic");

htmlButton.addEventListener("click", function(){
  console.log(inputBox.value);
  return document.querySelector("#varyingHeader").textContent = someText.value
})
