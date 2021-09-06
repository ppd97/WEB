let x = 123;
console.log(typeof(x))
console.log(x.toString())            // returns 123 from variable x
console.log((123).toString())        // returns 123 from literal 123
console.log((100 + 23).toString())   // returns 123 from expression 100 + 23
var y=x.toString()
console.log(typeof(y))
let exp=9.656;
console.log(exp.toExponential());
console.log(Number(true));  
console.log(Number(false));         // returns 0
console.log(Number("10"));          // returns 10
console.log(Number("  10"));        // returns 10
console.log(Number("10  "));        // returns 10
console.log(Number(" 10  "));       // returns 10
console.log(Number("10.33"));       // returns 10.33
console.log(Number("10,33"));       // returns NaN
console.log(Number("10 33"));       // returns NaN
console.log(Number("John"))       // returns NaN
