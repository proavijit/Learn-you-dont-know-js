// // function* fetchData() {
// //   console.log("Loading...");
// //   yield new Promise((resolve) => setTimeout(() => resolve("Data loaded!"), 2000));
// // }

// // const gen = fetchData();
// // gen.next().value.then(console.log); // 2 সেকেন্ড পর "Data loaded!" দেখাবে



// // function* fetProductDataInChunks(){
// //   const totalProducts = 50;
// //   const chunkSize = 10;
// // }

// // for(let i = 0; i< totalProducts; i += chunkSize){
// //   yield new Promise(resolve => {
// //     setTimeout(() => {
// //       resolve(`Fetched products ${i + 1} to ${Math.min(i + chunkSize, totalProducts)}`)
// //     }, 1000)
// //   })

// //   return "All products fetched!"
// // }

// // const productFetcher = fetProductDataInChunks()

// // async function handleFetching(){
// //   let result = await productFetcher.next();
// //   while (!result.done){
// //     console.log(result.value);
// //     result = await productFetcher.next()
// //   }
// //   console.log(result.value)
// // }

// // handleFetching()

// function* fetchProductDataInChunks() {
//   const totalProducts = 50;
//   const chunkSize = 10;

//   for (let i = 0; i < totalProducts; i += chunkSize) {
//     yield new Promise(resolve => {
//       setTimeout(() => {
//         resolve(`Fetched products ${i + 1} to ${Math.min(i + chunkSize, totalProducts)}`);
//       }, 1000);
//     });
//   }

//   return "All products fetched!";
// }

// const productFetcher = fetchProductDataInChunks();

// async function handleFetching() {
//   let result = await productFetcher.next();
//   while (!result.done) {
//     console.log(result.value);
//     result = await productFetcher.next();
//   }
//   console.log(result.value);
// }

// handleFetching();
// function* foo() {
//   console.log("inside `*foo()`:", yield "B");
//   console.log("inside `*foo()`:", yield "C");
//   return "D";
// }

// function* bar() {
//   console.log("inside `*bar()`:", yield "A");
//   // `yield`-delegation!
//   console.log("inside `*bar()`:", yield* foo());
//   console.log("inside `*bar()`:", yield "E");
//   return "F";
// }

// var it = bar();
// console.log("outside:", it.next().value); 
// console.log("outside:", it.next(1).value); outside: B
// console.log("outside:", it.next(2).value); outside: C
// console.log("outside:", it.next(3).value);inside `*bar()`: D  outside: E
// console.log("outside:", it.next(4).value);   outside: F



// function foo(x, y, cb){
//   setTimeout(function(){
//     cb(null, x + y);

//   }, 1000)
// }

// var fooThunkory = thunkfy(foo);
// var fooThunk = fooThunkory(3, 4);

// var fooPromisory = promisiry(foo);
// var fooPromise = fooPromisory(3, 4);


// fooThunk(function (err, sum){
//   if(err) console.log(err);
//   else console.log(sum);
// })

// fooPromise
// .then(sum => console.log(sum);)
// .then(err => console.log(err);)
  


// function* foo(){
//   var val = yield requestAnimationFrame("http://some.url.1");
//   console.log(val)
// }

// run(foo)


// var request = Promise.warp(ajax);
// var request = thunkfy(ajax)




// function createGanarator(arr){
//   let index = 0;

//   return {
//     next: function(){
//       if(index < arr.length){
//         return {value: arr[index++], done: false};
//       }else{
//         return {done: true}
//       }
//     }
//   }
// }


// const myGen = createGenerator([10, 20, 30]);

// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());


// function createGenerator(arr) {
//   let index = 0;

//   return {
//     next: function () {
//       if (index < arr.length) {
//         return { value: arr[index++], done: false };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// }

// const myGen = createGenerator([10, 20, 30]);

// console.log(myGen.next());  
// console.log(myGen.next());  
// console.log(myGen.next());  
// console.log(myGen.next());  


// function createGanarator(arr){
//   let index = 0;

//   return {

//   }



// }




function foo(url){
  var state;
  var val;


  function process(v){
    switch(state){
      case 1:
        console.log("requesting:", url);
        return request(url);
        
        case 2:
          val =v;
          console.log(val);
          return ;

          case 3:
            var err =v;
            console.log("Oops:", err);

            return false;
    }
  }

  return {
    next: function(v){
      if(!state){
        state =1 ;
        return {done: false, vslue: process()}
      }else if(state ===1 ){
        state = 2;
        return {done: true, value: process(v)};

      } else {
         return { done: true, value: undefined};
      }
    }
  }

  throw: function(e){
    if(state == 1){
      state = 3;

      return { done: true, value: undefined}
    }
  }

  throw: function(e){
    if(state ==1){
      state = 3;
      return {done:true, value: process(e)}
    }else{
      throw e;
    }
  }


}