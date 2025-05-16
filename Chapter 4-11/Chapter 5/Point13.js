document.writeln(`<h1>The Lifetime Supply Calculator</h1>`);
let favouritesnack = "Chocolate Chip";
document.writeln(`Favourite Snack: ${favouritesnack} <br>`);
let age = 15;
document.writeln(`Current age: ${age} <br>`);
let maximumage = 65;
document.writeln(`Esimated Maximum Age: ${maximumage} <br>`);
let snacksperday = 5;
document.writeln(`Snacks per day ${snacksperday}`);
let remainingyears = maximumage - age;
let remainingdays = remainingyears * 365;
let snackscount = remainingdays * snacksperday;
document.writeln( `You will need ${snackscount} Chocolate Chip to last you until the ripe old age of 65`)