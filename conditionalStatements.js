/*Problem 1: The Bouncer*/
let age = 19;
if (age >= 18) {
    console.log("Welcome to adulthood");
} else {
    console.log ("Access denied");
}
/*Problem 2: The Traffic Light (else if) */
let light = "Green";

if (light === "Green") {
    console.log("Go");
} else if (light === "Yellow") {
    console.log ("Slow Down Caution");
} else if (light === "Red"){
    console.log ("Stop");
}

/*Problem 3: The VIP Pass (Logical Operators) */
let hasTicket = false;
let isVip = true;

if (hasTicket || isVip) {
    console.log("Welcome to the show!");
} else {
    console.log("No entry.");
}
//I think this will be "Welcome to the show"
// 2 reasons 1 is that the isVip value is true while the hasTicket value is false
// The if statement is only looking for one conditions to be true, ending with a pass becasue isVip return a true value

/* Problem 1: The Countdown*/
for (let i = 10; i>=0; i--) {
    console.log(i);
    if (i === 0) {
        console.log ("Blast off!");
    }
}

/*Problem 2: The Loading Bar*/
let loadingPercent = 0;
while (loadingPercent <= 100) {
    console.log("Loading: " + loadingPercent + "%");
    loadingPercent += 20;
}
/*📋 Problem 3: Spot the Infinite Loop */
let fuel = 5;

while (fuel > 0) {
    console.log("Keep driving!");
}//basically it checks if the fuel is greater than 0 but in this case because there is no changes in the fuel, making the value retain itself, it will always return true, and it will never end because of a missing condition