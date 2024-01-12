// const name="Vinay"
// const marks=50
// // console.log(name +" " + marks  + " Value ");

// console.log(`Hello my name is ${name} and my marks is ${marks}`);

// const empName = new String ('Sandeep')
// console.log(empName[4]); 
// console.log(empName.__proto__);
// console.log(empName.length);
// console.log(empName.toUpperCase());

// console.log(empName.charAt(8));
// console.log(empName.indexOf('n'));

// let name= new String("Mohd Nafees Khan");
// const number =12345
// console.log(`My Manager's Name is ${name} and his number is ${number}`);

// const name1 = new String('Manoj')

  // charAt() method is used to check the position of a particular character
//   console.log(name1.charAt(4));
  // indexOf() method is used to check the position of a particular 
//   console.log(name1.indexOf('o'));

let fullName="vinay kumar  nishad";
console.log(fullName.length); // length
console.log(fullName.toLocaleUpperCase()); // toLocalUpperCase() : method is used to change string value ot upper case 

let string = "      vinay kumar          ";
console.log(string.trim());
// trim() : it is used to remove extra spaces before  and after string object names.

// slice() 
let address = "New Delhi";
console.log(address.substring(3,8)); 
console.log(address.slice(-2,6));

let url="http://localhost/vinay%20kumar";
// replace()
console.log(url.replace('%20','-'));
console.log(url.includes('kumar'));
// includes()