var a = 42;
var b = "abc";
var c = null;

console.log(a || b); // আউটপুট: 42 (a ট্রুদি, তাই এটা ফেরত দিয়েছে)
console.log(a && b); // আউটপুট: "abc" (a ট্রুদি, তাই b ফেরত দিয়েছে)
console.log(c || b); // আউটপুট: "abc" (c ফলসি, তাই b ফেরত দিয়েছে)
console.log(c && b); // আউটপুট: null (c ফলসি, তাই এটা ফেরত দিয়েছে)

// ডিফল্ট মান হিসেবে ব্যবহারের সাধারণ উদাহরণ:
function greet(name) {
  name = name || "অতিথি"; // যদি name ফলসি হয় (undefined, null, ইত্যাদি), তাহলে "অতিথি" ব্যবহার করবে
  console.log("হ্যালো, " + name);
}

greet("এলিস");   // আউটপুট: হ্যালো, এলিস
greet();        // আউটপুট: হ্যালো, অতিথি
greet("");       // আউটপুট: হ্যালো, অতিথি (খালি স্ট্রিং ফলসি)
greet("বব");    // আউটপুট: হ্যালো, বব

// খালি স্ট্রিং ("") বা 0 এর ক্ষেত্রে সাবধান। যদি আপনি না চান যে এইগুলো ডিফল্ট মান ট্রিগার করুক, তাহলে আপনাকে আরও স্পষ্টভাবে বলতে হবে।
function greet2(name) {
    name = (name === undefined || name === null) ? "অতিথি" : name;
    console.log("হ্যালো, " + name);
}

greet2(""); //হ্যালো, 
greet2(0); //হ্যালো, 0