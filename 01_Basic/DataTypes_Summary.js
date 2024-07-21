 // Primitive
 // 7 types : String, Numbers, Boolean, Null, Undefined, Symbol, Big Int

 const score = 100;
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null 
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId);
 
 const bigNumber = 843727384856576n

 //Reference(Non primitive)
 //Array, Objects, Functions

 const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name : "Rahul",
    age : 20 
 }

const myFunction= function(){
    console.log("hello world");
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory types : Stack(primitive) is where the copy of data is change and Heap(Non primitve) is where reference 
//is done and operations 