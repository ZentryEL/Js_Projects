
const readline = require('readline');
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Enter the area: ", function(input) {
  let area = parseFloat(input);

  if (isNaN(area) || area < 0) {
    console.log("Invalid input. Please enter a positive number.");
  } else {
    let radius = Math.sqrt(area / Math.PI);
    console.log("Radius:", radius);
  }

  readLine.question("Enter the diameter: ", function (input) {
    let diameter = parseFloat(input);
    if (isNaN(diameter) || diameter < 0) {
        console.log ("Invalid input. Please Enter a positive number.");
    } else {
        let radius = diameter / 2;
        console.log ("Radius:", radius);
    }
    readLine.close ();
    });
});