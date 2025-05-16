let userInput = prompt("Enter a number to check if it's even or odd:");
let number = Number(userInput);

// چیک کریں کہ نمبر even ہے یا odd
if (number % 2 === 0) {
  alert("The number is EVEN.");
} else {
  alert("The number is ODD.");
}
