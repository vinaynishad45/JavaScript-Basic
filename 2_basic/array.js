// let frontEndLanguage=["HTML","CSS","JAVASCRIPT","BOOTSTRAP"];
// let backendLanguage=["Java","Phython",".Net","Php"];
// spread array
// let fullStackCourse=[...frontEndLanguage,...backendLanguage];
// console.log(fullStackCourse);

// flat is used to merge more than one array into a single variable name. 
let numArray=[1,2,4,[5,7,10],[12,15,18]];
let myArray=numArray.flat(Infinity);
// console.log(numArray);
console.log(myArray);

console.log(Array.isArray("VINAY"));
console.log(Array.from("VINAY"));
console.log(Array.isArray({name:"VINAY"})); // interesting

let firstScore=100;
let secondScore=200;
let thirdScore=300;

console.log(Array.of(firstScore,secondScore,thirdScore));