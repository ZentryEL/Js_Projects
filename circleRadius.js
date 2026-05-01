
const readline = require('readline');
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Promisify 
function ask(question) {
  return new Promise(resolve => readLine.question(question,resolve));
}

function radiusFromArea(area) {
  return Math.sqrt(area / Math.PI);
}
function radiusFromDiameter(diameter) {
  return diameter / 2;
}

//menu loop

async function main (){
  while (true) {
    console.log("\n=== Circle Calculator ===");
    console.log("1. Find radius from area");
    console.log("2. Find radius from diameter");
    console.log("3. Exit");

    const choice = await ask ("Choose an option (1-3): ");

    if (choice === "1") {
      const input = await ask("Enter the area: ");
      const area = parseFloat(input);
      
      if(isNaN (area) || area < 0) {
        console.log ("Invalid input. Enter a positive number.");
      }
      else {
        const radius = radiusFromArea (area);
        console.log(`Radius: ${radius.toFixed(2)}`);     
      }
    }
    else if (choice === "2") {
      const input = await ask ("Enter the diameter: ");
      const diameter = parseFloat (input);
      if(isNaN (diameter) || diameter < 0) {
        console.log ("Invalid input. Enter a positive number.");
      }
      else {
        const radius = radiusFromDiameter (diameter);
        console.log(`Radius: ${radius.toFixed(2)}`);
      }
    }
    else if (choice === "3") {
      console.log ("Goodbye");
      readLine.close();
      break;
    }
    else {
      console.log("Invalid choice. Please select 1-3");
    }
  }
}

main();