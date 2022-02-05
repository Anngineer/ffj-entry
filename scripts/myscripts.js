// JAVASCRIPT FOR THE DECODER PAGE
// When the page loads, check to see if it has a hash in the website
let myunDecodedURLHash = window.location.hash.substring(1);
let myDecodedURLHash = atob(myunDecodedURLHash);
console.log(`the secret message is ${myDecodedURLHash}`);
let message = document.querySelector("#message");
message.innerText = myDecodedURLHash;
// I'll be setting a <p> </p> to have the decoded text.
// Have a hyperlink to take you to the journal page to write another one
