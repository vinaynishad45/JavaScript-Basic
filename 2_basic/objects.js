// Object litrals

// let mySymbol= Symbol("key1");

// let studentInformation= {
//     studentName:"Vinay Kumar",
//     studentAge:22,
//     [mySymbol]:"key1",
//     studentCourse:"Java Full Stack",
//     studentEmail:"vinay@gmail.com",
//     studentAddress:"Noida Sector 15"

// }
// console.log(studentInformation);

// let users={
//     name:"sandeep",
//     "fullName":"Sandeep Kumar Nishad",
//     age:22,
//     email:"svrsandeep@gmail.com",
//     isLoggedIn:false,
//     lastDayActive:["Monday","Saturday"]
// }
// console.log(users.lastDayActive); // Professional Not prefers
// console.log(users["lastDayActive"]); // Professional prefers
// console.log(users.fullName);

// freeze() method is used to not change the object's values
// Object.freeze(users);

// users.age=20;
// console.log(users);


// -------------------------------------

// singleton object
// const employee=new Object();
//  const employee={

// email:"default@gmail.com",
// fullName:{
//     userFullName:{
//         firstName:"vinay",
//         lastName:"nishad"
//     }
// }
// };
// console.log(employee.fullName);
// console.log(employee.fullName.userFullName.lastName);
// console.log(employee.fullName.userFullName.firstName);

let obj1={1:"abc",2:"def"};
let obj2={3:"ghi",4:"jkl"};

// let obj3={obj1,obj2};
// let obj3=Object.assign({},obj1,obj2);
// console.log(obj3);
// spread operator >: scattered

let obj4={...obj1,...obj2};
console.log(obj4);
