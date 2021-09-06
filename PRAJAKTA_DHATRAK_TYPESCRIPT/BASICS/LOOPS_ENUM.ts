enum Subjects{
    OOPs=2,
    Java,
    COA
}
//String Enum
enum Departments{
   Prajakta="Java",
   Amit="AWS",
   Devesh="Linux",
   Suchit="Angular"

}
console.log(Departments.Amit);
//Reverse Mapping
console.log(Departments['Suchit'])

console.log(Subjects)

//Union
function displayType(code: (string|number))
{
    if(typeof(code)==="number")
    {
        console.log("Number")
    }
    else if(typeof(code)==="string")
    {
        console.log("String")
    }
}
displayType(123);
displayType('Praju')

//Any
let str:any="Praju"
console.log(str)
console.log(typeof(str))

function dis():void{
    console.log("Hello")
}
dis()

//Type Assertion
class Emp
{
    name:string;
    dept_is:number;
}

let e=<Emp>{};
e.name="Prajakta";
e.dept_is=10001;
console.log(e);

interface fruits{
    name:string;
    city:string;
}
let fr=<fruits>{};
fr.name="Mango"
fr.city
console.log(fr)

//condition
let x:number=10,y=20
x>y?console.log(`${x} ic greater than ${y}`):console.log(`${y} is greater than  ${x}`)

//for loop
let array:number[]=[10,15,20,158];
let sum:number=0
for(let i=0;i<array.length;i++)
{
    sum=sum+array[i];
}
console.log(sum);

//for of
let arr = [10, 20, 30, 40];

for (var val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}
//for in
for(var i in arr)
{
    console.log(i)
}
