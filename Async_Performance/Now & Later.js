function fetchData(callback){
  setTimeout(() =>{
    console.log("data load successfully......");
    callback()
  }, 2000)
}

function processData(){
  console.log("Data Process Start ........")
}


fetchData(processData)

// fetchData(function(data) {
//     processData(data, function(result) {
//         saveData(result, function(response) {
//             console.log("সব কাজ সম্পন্ন! ✅");
//         });
//     });
// });


// function now(){
//   return 21
// }

// function later(){
//   answer = answer * 2;
//   console.log("Meaning of life:", answer);
// }

// var answer = now();

// setTimeout(later, 1000)


// function num(){
//   return 33;
// }

// function calCulation(){
//     calc += 20;

//     console.log("My calculation Successfully ....")
//     console.log(calc);
// }



// let calc = num()


// setTimeout(calCulation, 2000)

// console.log(calc);

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 10);
// console.log("End");
// var a;

// function foo(x) {
//   if (!a) {
//     a = x * 2;
//     baz();
//   }
// }

// function bar(x) {
//   if (!a) {
//     a = x / 2;
//     baz();
//   }
// }

// function baz() {
//   console.log(a);
// }

// ajax("http://some.url.1", foo);
// ajax("http://some.url.2", bar);

