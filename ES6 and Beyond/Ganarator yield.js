// const EVT_LOGIN = Symbol.for("event.login");

// console.log(EVT_LOGIN);

// const anotherRef = Symbol.for("event.login");

// console.log(EVT_LOGIN === anotherRef);


// const sym = Symbol.for("Something cool");

// console.log(Symbol.keyFor(sym))


// var arr = "Hello world"
// var it = arr[Symbol.iterator]();


// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// var m = new Map();
// m.set("foo", 42);

// m.set({cool:true}, "Hello world");

// var it1 = m[Symbol.iterator]();

// var it2 = m.entries();

// console.log(it1.next());


// var it = [10, 20, 30 ][Symbol.iterator]();


// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// var tasks = {
//   [Symbol.iterator](){
//     var steps = this.actions.slice();
//     return{
//       [Symbol.iterator](){return this},
//       next(...args){
//         if(steps.length > 0){
//           let res = steps.shift()(...args);
//           return {value: res, done:false}
//         } else{
//           return {done: true}
//         }
//       },
//       return (v){
//         steps.length = 0;
//         this.return{
//           value: v, done: true
//         }
//       }
//     }
//   },
//   actions:[]
// }


// if(!Number.prototype[Symbol.iterator]){
//   Object.defineProperty(
//     Number.prototype,
//     Symbol.iterator
//     {
//       writable: true,
//       configurable; true,
//       enumerable: false,
//       value: function iterator(){
//         var i , inc, done = false, top = +this;
//         inc = 1*(top < 0 ? -1:1);
//         return {
//           [Symbol.iterator](){return this}
//           next(){
//             if(!done){
//               i = 0
//             }
//           }
//         }
//       }
//     }
//   )
// }


// function* foo() {
//   yield 10;
//   yield 20;
//   yield 30;
// }

// const gen = foo();
// console.log(gen.next().value); // 10
// console.log(gen.next().value); // 20
// console.log(gen.next().value); // 30


// function* randomNumbers(){
//   while(true){
//     yield Math.random();
//   }
// }

// const gen = randomNumbers();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


// function* foo(){
//   var x = yield 10;
//   console.log("Received:", x);
// }

// const gen = foo();
// console.log(gen.next().value);
// console.log(gen.next(50).value);


// function* foo(){
//   var a = 2 + yield 3;
// }

// const gen = foo();
// console.log(gen.next().value);
// console.log(gen.next(5).value)

// function* foo(){
//   var a = 2 + (yield 3 )
// }


// function* foo(){
//   yield yield yield 3
// }

// const gen = foo();

// console.log(gen.next().value);
// console.log(gen.next(10).value);
// console.log(gen.next(10).value);

// function* foo(){
//   yield  *[1,2,3]
// }

// for(l88888et value of foo()){
//   console.log(value);
// }


// function* foo(){
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* bar(){
//   yield *foo()
// }

// for(let value of bar()){
//   console.log(value);
// }


// function *foo(x){
//   if(x < 3){
//     x = yield *foo(x + 1);
//   }
//   return x * 2
// }

// var it foo(1)
// it.next()


// function *foo(){
//   yield 1;
//   yield 2;
//   yield 3
// }


// for(var v of foo(){
//   console.log(v);
// })

// var it = foo();

// console.log(it.next());


// function *foo(){
//   yield 1;
//   yield 2;
//   yield 3;
// }

// var it = foo();
// console.log(it.next());
// console.log(it.return(42));
// console.log(it.next());



function *foo(){
  try{
    yield 1;
    yield 2;
    yield 3;
  }finally{
    console.log("Cleanup");
  }
}

for(var v of foo()){
  console.log(v);
}

var it = foo();

it.next();
it.next(42)