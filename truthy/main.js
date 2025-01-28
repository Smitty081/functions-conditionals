/*let iLikeChocolate = false;

if (iLikeChocolate) {
    console.log("You should eat it...");
} else {
    console.log("You should not eat it...");
}

let hungry = "True";
let timeOfDay = "lunchtime";

if (hungry = true && timeOfDay === "lunchtime") {
    console.log("Eat lunch...")
} else if (hungry === true && timeOfDay !== "lunchtime") {
    console.log("Eat a snack...")
} else {
    console.log("Do not eat...");
}*/

// Math.floor() makes the random number a whole number, Math.random()generates a random number
const testGrade = Math.floor(Math.random() * 100);
console.log(testGrade);

if (testGrade >= 0 && testGrade <= 65) {
    console.log("You got an F!")
} else if (testGrade > 65 && testGrade <= 70) {
    console.log("You got a D!");
} else if (testGrade > 70 && testGrade <= 79) {
    console.log("You got a C!");
} else if (testGrade >= 80 && testGrade <= 89) {
    console.log("You got a B!")
} else if (testGrade >= 90 && testGrade <=100) {
    console.log("You got an A!")
} else {
    console.log("What are you doing bro?");
}


