let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = false;
let runnersAge = 15;

if (runnersAge >= 18 && earlyRegister) {
    console.log(raceNumber + 1000);
}

if (runnersAge >= 18 && earlyRegister) {
    console.log(`Your race number is ${raceNumber + 1000}, and you will start at 9:30 a.m.`);
} else if (runnersAge >= 18 && !earlyRegister) {
    console.log(`You will start at 11:00 a.m. and your race number is ${raceNumber + 1000}`);
} else if (runnersAge > 0 && runnersAge < 18) {
    console.log(`You will start at 12:30 p.m. and your race number is ${raceNumber + 1000}`)
}