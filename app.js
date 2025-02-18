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


if(!Number.prototype[Symbol.iterator]){
  Object.defineProperty(
    Number.prototype,
    Symbol.iterator
    {
      writable: true,
      configurable; true,
      enumerable: false,
      value: function iterator(){
        var i , inc, done = false, top = +this;
        inc = 1*(top < 0 ? -1:1);
        return {
          [Symbol.iterator](){return this}
          next(){
            if(!done){
              i = 0
            }
          }
        }
      }
    }
  )
}