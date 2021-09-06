const Arr=['English','Math','Science'];
console.log(Arr);
console.log(Arr.toString());
console.log(Arr.join(";"));
Arr.push('History');
Arr.push('OOPs');
Arr.push('Java');
console.log(Arr);
// Arr.pop()
// console.log(Arr);
Arr.shift();
console.log(Arr);
Arr.unshift('Social');
console.log(Arr);
Arr[0]="Hello";
console.log(Arr);

Arr[Arr.length] = "Kiwi"; 
console.log(Arr);
// delete Arr[0];
// console.log(Arr);-----it deletes element but does not 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// Concatenate (join) myGirls and myBoys
const myChildren = myGirls.concat(myBoys);  
console.log(myChildren);
console.log(myChildren.sort());
// ------------Iteration------------
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);


function myFunction(value) {
  txt += value + "\n"; 
}
console.log(txt)

let msgArray = []
msgArray[0] = 'Hello'
msgArray[99] = 'world'

if (msgArray.length === 100) {
  console.log('The length is 100.')
}

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2)
function myFunction(value) {
  return value * 2;
}
const num = [45, 4, 9, 16, 25];
const over18 = num.filter(myFunction2);

function myFunction2(value) {
  return value > 18;
}
console.log(over18);