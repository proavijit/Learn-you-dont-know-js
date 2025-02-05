// var myBirthday = new Date(1998, 10, 25); // ২৫ নভেম্বর, ১৯৯৮
// console.log(myBirthday);




// var timestamp1 = new Date().getTime();
// console.log(timestamp1); // বর্তমান timestamp দেখাবে

// var timestamp2 = Date.now(); 
// console.log(timestamp2); // এটি একই কাজ করবে


// if(!Date.now){
//   Date.now = function(){
//     return new Date().getTime();
//   }
// }

// console.log(Date());



// var error = new Error("Something went wrong");

// console.log(error.message);



// function checkAge(age){
//   if(age < 18){
//     throw new Error("You are not an adult");
//   }
//   return "You are an adult";
// }

// try{
//   console.log(checkAge(15));
// }catch(error){
//   console.log(error.message);
// }


// var sym1 = Symbol("apple");
// var sym2 = Symbol("apple");

// console.log(sym1 === sym2);

// console.log('------------------');

// var obj = {
//   name: "Avijit"
// };


// let text = "Developer";
// console.log(text.slice(-3, 4));  // Output: ""
// console.log(text.slice(3, -3));  // Output: "vel"


let text = "Programming";

console.log(text.substring(6,8)); 