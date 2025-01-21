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

// উপসংহার:
// IIFE হল JavaScript-এর একটি শক্তিশালী কৌশল, যা scope isolation, variable encapsulation, এবং immediate execution এর জন্য ব্যবহৃত হয়। এটি ক্লিন এবং সুরক্ষিত কোড লেখার জন্য অত্যন্ত কার্যকর।