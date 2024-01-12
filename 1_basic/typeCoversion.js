// // Type conversion

// string to number
 let score="33";
 console.log(typeof score);
 console.log(typeof(score));
// // let number=Number(score);

console.log(number);
console.log(typeof(number));

 // boolean to number
let isLoggedIn=true

 let num=Number(isLoggedIn);
 console.log(num);
 console.log(typeof(num));

 // number to string
 let personalId=3546765;
 let address = String(personalId);
 console.log(personalId);
 console.log(address);
 console.log(typeof address);

 // number to boolean
 let acountNumber=8656575664;

 let isAcountNumber=Boolean(acountNumber);
 console.log(acountNumber);
 console.log(typeof acountNumber);

 console.log(isAcountNumber);
 console.log(typeof isAcountNumber);

 let firstName; // if you declare any variable name but not initialized then it will be undefined.
 console.log(firstName);

 let lastName=null; // null is Object type.
 console.log(lastName);
 console.log(typeof lastName);

 let fullName=String(firstName+lastName);
 console.log(fullName);
console.log(typeof fullName);

 // array to String
 let array = new Array(3,6,7,3,9);
 console.log(array);
 console.log(typeof array);
 let arrayName=String(array);
 console.log(arrayName);
 console.log(typeof arrayName);

//  String to array 

let villageName="vijay nager";
console.log(typeof villageName);
let arr=Array(villageName);
console.log(arr);
console.log(typeof arr);