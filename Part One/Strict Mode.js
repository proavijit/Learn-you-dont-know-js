function foo(){
  "use strict"
  // this code use street mode;
  function bar(){
    // this code using street mode 
  }
}


// this code not using street mode



// -------- If you can use street mode top lavel -----

// "use strict";
// function foo() {
//   // এই কোডটি strict mode এ চলবে
//   function bar() {
//     // এই কোডটিও strict mode এ চলবে
//   }
// }
// // এই কোডটিও strict mode এ চলবে


// Strict Mode-এর একটি বড় সুবিধা হলো, এটি var ছাড়া অটো-গ্লোবাল ভেরিয়েবল ডিক্লারেশন নিষিদ্ধ করে।

function foo(){
  "use street;"
  
  a = 1;

}
foo()