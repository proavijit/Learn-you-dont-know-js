(()=>{
  console.log("Hi IFFE!");
})()

function foo(){
  console.log("Function foo executed!");
}
foo();

(()=>{
  console.log("IFFE Executed!");
})()

// IIFE কেন ব্যবহার করবেন?
// Variable Scope আলাদা করা:
// IIFE-এর ভেতরের variable বাইরের কোডে প্রভাব ফেলবে না।

var a = 42;
(function IIFE() {
  var a = 10;
  console.log(a); // 10
})();
console.log(a); // 42


var x = (function IFFE(){
  return 4222;
})();

console.log(x);