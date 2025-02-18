

// let text = "Hello world";

// let position = text.indexOf("o");

// console.log(position);



// let text = "Hello, World";

// let char = text.charAt(4);

// console.log(char);


// let text = "Hello world!";
// // let position = text.indexOf("o");

// // console.log(position);

// let position = text.lastIndexOf("o");

// console.log(position);


// let text = "Hello World";
// let position = text.lastIndexOf("o");
// console.log(position);

// let text = "Hello world";

// let char = text.charAt(4);

// console.log(char);

// let text = "Hello Avijit";
// let part = text.slice(0, 5);

// console.log(part);

// let text = "Hello World";

// let arr = text.split(" ");

// console.log(arr);



// let text = "Javascript is Awasome";
// let searchChar = "a";
// let position = text.indexOf(searchChar);


// while(position !== -1){
//   console.log(`Found ${searchChar} at position: ${position}`);
//   position = text.indexOf(searchChar, position +1 )
// }


// var sym = Symbol("Some optional description");

// console.log(typeof sym);

// function Persion (name, age ){

//   this.name = name;
//   this.age = age;
//   this.greet = function(){
//     console.log("Hello ,my name is " + this.name);
//   }
// }

// const john = new Persion("John", 30);

// let inatilaze = john.greet();

// console.log(inatilaze);


// const EVT_LOGIN = Symbol("event.login");

// console.log(EVT_LOGIN);

// const INSTANCE = Symbol( "instance" );
// function HappyFace() {
//  if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];
//  function smile() { .. }
//  return HappyFace[INSTANCE] = {
//  smile: smile
//  };
// }
// var me = HappyFace(),
//  you = HappyFace();
// me === you; // true




// const myObject = {};

// myObject.name = "John";
// myObject.name = "Jane";


// console.log(myObject.name);


// const myArray = [1,2,3,4,5];

// for(const item of myArray){
//   console.log(item);
// }


// var o = {
//   foo: 42,
//   [Symbol("bar")]: "Hello world",
//   baz: true
// }

// Object.getOwnPropertyNames(o)


const SECRET = Symbol('secret');

const user = {
  name:"Avijit",
  age: 25,
  [SECRET]: "This is Hidden"
}

// console.log(user);
console.log(user[SECRET]);