

// var Function Scope

// var a = 2;
// (()=> {
//   var a = 3;
//   console.log(a);
// })();

// console.log(a);









// Let block Scope


// var a = 2;

// {
//   let a = 3;
//   console.log(a); // 3
// }
// console.log(a); //2






// ES6 এর আগে var ব্যবহার করলে for লুপের ইনডেক্স ভেরিয়েবল পুরো ফাংশনে অ্যাক্সেস করা যেত। কিন্তু let ব্যবহার করলে এটি শুধুমাত্র ওই ব্লকের মধ্যেই থাকবে।

// for (let i = 0; i < 4; i++) {
//  console.log(i);
  
// }

 // ReferenceError! কারণ i ব্লকের বাইরে নেই।










// Temporal Dead Zone (TDZ
// console.log(a); // ReferenceError!
// let a = 5;
// console.log(a); // এটি চলবে, প্রিন্ট করবে 5।


// console.log(typeof a); // "undefined" (কারণ a ডিক্লেয়ার করা হয়নি)

// var a = 5;


// var funcs = [];

// for (let i = 0; i < 6; i++) {
 
//   funcs.push(function(){
//     console.log(i);
//   })
  
// }

// funcs[3]()



// let fruits = ["apple", "banana", "cherry"];

// for(let fruit of fruits){
//   setTimeout(() => {
//     console.log(fruit);
//   }, 1000);
// }

// "use strict"
// {
//   foo(); // ✅ কাজ করবে (Hoisting হয়েছে)
  
//   function foo() {
//     console.log("Hello from foo!");
//   }
// }

// foo(); // ❌ ReferenceError (ব্লকের বাইরে foo নেই)





// "use strict"


// if(true){
//   function test(){
//     console.log("Block Scope ata");
//   }
// }

// test()
// "use strict"

// {
//   hoistingFunction()
//   function hoistingFunction(){
//     console.log("Hoisted Insite block");
//   }
// }

// hoistingFunction()

// "use strict"

// if(true){
//   function foo(){
//     console.log("1");
//   }
// }else{
//   function foo(){
//     console.log("2");
//   }
// }

// console.log(`ff${foo()}`);


// const foo = function(){
//   console.log("Use function Expression!");
// }

// foo()

// const foo = () => console.log("Use arrow function");

// foo()


// function foo(x, y, z){
//   console.log(x, y, z);
// }

// foo(...[1,2,3,4])