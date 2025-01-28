const names = "Rugen";
const rank = "Count";
const age = 22;

if (age > 0 && age < 18) {
    console.log("You are too young for the military!");
} else if (names === "Rugen" && rank === "Count") {
    console.log("My name is Inigo Montoya, you killed my father, prepare to die!");
} else if (rank === "Captain") {
    console.log(`Aye Aye Captain ${names}`);
} else if (rank === "Private" && age > 40) {
    console.log(`What have you been doing with your life ${names}`);
} else {
    console.log(`Hello ${rank} ${names}, I cannot wait to celbrate your ${age + 1}th birthday next year!`);
}