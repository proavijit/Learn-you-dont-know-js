

// function one(){
//   var a  = 1;
//   console.log(a);
// }

// function two(){
//   var a = 22;
//   console.log(a);
// }

// one();
// two()

// function outer(){
//   var a = 1;


//   function inner(){
//   var b = 2;
//   console.log(a + b);
// }
// inner()
// console.log(a);

// }

// outer()

// const TAX_RATE = 0.08;

// function calculateFinalPurchaseAmount(amt) {
//   // ট্যাক্স সহ নতুন পরিমাণ গণনা
//   amt = amt + (amt * TAX_RATE);
//   // নতুন পরিমাণ রিটার্ন করা
//   return amt;
// }

// var amount = 99.99;
// amount = calculateFinalPurchaseAmount(amount);
// console.log(amount.toFixed(2)); // 107.99


// প্র্যাকটিস এক্সারসাইজ
// একটি প্রোগ্রাম লিখুন যা আপনার ফোন কেনার মোট দাম হিসাব করবে। আপনি ফোন কিনতে থাকবেন (হিন্ট: লুপ ব্যবহার করুন!) যতক্ষণ না আপনার ব্যাংক একাউন্টে টাকা শেষ হয়। আপনি প্রতি ফোনের জন্য অ্যাকসেসরিও কিনবেন, যতক্ষণ না আপনার মোট ক্রয় পরিমাণ আপনার মানসিক খরচ সীমার নিচে থাকে।

// স্টেপসমূহ:

// ট্যাক্স যোগ করুন এবং তারপর মোট দাম প্রিন্ট করুন, সঠিকভাবে ফরম্যাট করা।
// আপনার ব্যাংক একাউন্টের ব্যালেন্সের সাথে পরিমাণ যাচাই করুন এবং দেখুন আপনি এটি কিনতে পারেন কিনা।
// কোডের জন্য কিছু কনস্ট্যান্ট সেট করুন:

// ট্যাক্স রেট, ফোনের দাম, অ্যাকসেসরির দাম, এবং খরচ সীমা।
// আপনার ব্যাংক একাউন্ট ব্যালেন্সের জন্য একটি ভেরিয়েবল।
// ফাংশন সংজ্ঞায়িত করুন:

// ট্যাক্স হিসাব করার জন্য।
// মূল্য ফরম্যাটিং এবং দুই দশমিক স্থান পর্যন্ত রাউন্ড করার জন্য।
// এখন, প্র্যাকটিস করতে শুরু করুন!

const SPENDING_THRESHOLD = 200;  // খরচের সীমা
const TAX_RATE = 0.08;          // ট্যাক্স রেট
const PHONE_PRICE = 99.99;      // ফোনের দাম
const ACCESSORY_PRICE = 9.99;   // অ্যাকসেসরির দাম
let bank_balance = 303.91;      // ব্যাংক একাউন্টের ব্যালেন্স
let amount = 0;                 // মোট পরিমাণ শুরুতে 0


// ট্যাক্স হিসাব করার ফাংশন
function calculateTax(amount){
  return amount * TAX_RATE;
}

// পরিমাণ ফরম্যাট করার ফাংশন (যেমন: $99.99)
function formatAmount(amount){
  return "$" + amount.toFixed(2)
}

// যতক্ষণ না আপনার ব্যালেন্স শেষ হয়ে যায়, ফোন কিনতে থাকুন

while (amount < bank_balance) {
   // নতুন ফোন কিনুন
   amount = amount + PHONE_PRICE;

   // যদি অ্যাকসেসরি কিনতে
   if(amount < SPENDING_THRESHOLD){
    amount = amount + ACCESSORY_PRICE;
   }
  
}

// ট্যাক্স যোগ করুন

amount = amount + calculateTax(amount);

console.log("My Purchase:" + formatAmount(amount));

if(amount > bank_balance){
 console.log("You can't afford this purchase. :("); 
}else{
   console.log("You can afford this purchase. :(");
}


// Nasted Scope 

function foo(){
  var a = 1;
  function bar(){
    var b = 2;
    function baz(){
      var c = 3;
      console.log(a, b, c);
    }
    baz()
    console.log(a, b);
  }
  bar();
  console.log(a);
}
foo()