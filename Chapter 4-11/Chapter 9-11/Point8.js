let userInput = prompt("Enter a number to check if it's divisible by 3:");
let number = Number(userInput);
if (number % 3 === 0) {
  alert("The number is divisible by 3.");
} else {
  alert("The number is NOT divisible by 3.");
}
