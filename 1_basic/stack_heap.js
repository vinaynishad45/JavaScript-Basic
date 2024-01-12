// Stack(Primitive), Heap(Non-Primitive)

let myChannel="Vinaycoders.com"

let anotherName=myChannel
anotherName="ChaiAurCode"
console.log(anotherName);
console.log(myChannel);

let userOne={
   email:"vinay123@gmail.com",
   upiId:"vinay@ybl"
}

let userTwo=userOne

userTwo.email="sandeep@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);