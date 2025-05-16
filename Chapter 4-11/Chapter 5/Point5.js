document.writeln(`<h1>Table of five</h1>`)
function table(number){
    for (var z=1;z<=10;z++){
        var result = z*number;
        document.writeln(`<br>`)
        document.writeln(`${number} x ${z} = ${result} `)
    } 
}

table(5)