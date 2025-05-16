document.writeln(`<h1>Currency in PKR</h1>`)
let usdollar = 10;
let dollarrate = 104.80;
let riyal = 25;
let riyalrate = 28;
let usconvert = usdollar * dollarrate;
let riyalconvert = riyal * riyalrate;
let pkr = usconvert + riyalconvert;
document.writeln(`Total Currency in PKR :${pkr}`)