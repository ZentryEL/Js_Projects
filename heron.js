// Heron's Formula in JavaScript

const prompt = require("prompt-sync")();

// User input
let a = parseFloat(prompt("Enter side a: "));
let b = parseFloat(prompt("Enter side b: "));
let c = parseFloat(prompt("Enter side c: "));

// Calculate semi-perimeter
let s = (a + b + c) / 2;

// Calculate area using Heron's Formula
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

// Display result
console.log("Area of the triangle is:", area);