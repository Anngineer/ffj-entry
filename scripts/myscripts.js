// JAVASCRIPT FOR THE DECODER PAGE
// When the page loads, check to see if it has a hash in the website
let myunDecodedURLHash = window.location.hash.substring(1);
let myDecodedURLHash = atob(myunDecodedURLHash);
// console.log(`the secret message is ${myDecodedURLHash}`);
let message = document.querySelector("#message");

let messageDecoderSection = document.querySelector("#message-decoder-section");
let height = message.offsetHeight;
message.innerText = myDecodedURLHash;

setTimeout(() => {
  height = message.offsetHeight;
  //   console.log(`the height of the message is ${height}`);
  let newHeight = message.offsetHeight + 1000;
  messageDecoderSection.style.height = `${newHeight}px`;
  //   console.log(`The section height is ${messageDecoderSection.clientHeight}`);
  //   console.log(newHeight);
}, 100);
