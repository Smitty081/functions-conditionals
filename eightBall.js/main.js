const userName = "";
const userQuestion = "Am I ever going to make it?";
const randomNumber = Math.floor(Math.random() * 8);
const eightBall = "";

if (userName === "Jeffrey") {
    console.log(`Hello ${userName}!`);
} else {
    console.log("Hello!")
}
console.log(userQuestion);

 if (randomNumber === 0) {
    console.log("Hell Yeah!");
 }  else if (randomNumber === 1) {
    console.log("Yes sir!");
 } else if (randomNumber === 2) {
    console.log("Not sure, ask again later.");
 } else if (randomNumber === 3) {
    console.log("I don't know man.");
 } else if (randomNumber === 4) {
    console.log("Don't cash those checks yet.");
 } else if (randomNumber === 5) {
    console.log("Hell nah.");
 } else if (randomNumber === 6) {
    console.log("Not looking good from here bro.");
 } else if (randomNumber === 7) {
    console.log("Signs point to yes!");
 } else {
    console.log("You break, you buy");
 }

 console.log(randomNumber);


