
// const a = [2, 3, 4];
// const b = [1, ...a, 5];

// console.log(b);


// const obj1 = {name: "Avijit", age: 25};
// const obj2 = {...obj1, city: "Jashore"};

// console.log(obj2);


// function foo(x, y, ...z){
//   console.log(x, y, z);
// }

// foo(1,2,3,4,5,6)

// function foo(...args){
//   console.log(args);
// }

// foo(1,2,3,4,5,6)


// function oldWay(a){
//   var args = Array.prototype.slice.call(a);
//   console.log(args);
// }

// oldWay(1,2,3,4,5)


// function foo(...args){
//   args.shift();
//   console.log(...args);
// }

// foo(1,2,3,4,5)

// function foo(x, y){
//   x = x || 11;
//   y = y || 31;
//   console.log(x + y);
// }

// foo(0, 7)


// function foo(x, y){
//   x = (x !== undefined) ? x : 11;
//   y = (y !== undefined) ? y : 31;
//   console.log(x + y);
// }

// foo()


// function foo(x = 11, y = 31){
//   console.log(x + y);
// }

// foo(2,undefined)


// function foo(x, y, ...z){
//   console.log(x, y, z);
// }

// foo(1,2,3,4,5,6,7)


// function foo(...vals){
//   vals = vals.length ? vals : [1,2,3]
//   console.log(vals);
// }

// foo(55,66)

// function bar(val) {
//   console.log("bar called!");
//   return y + val;
// }

// function foo(x = y + 3, z = bar(x)) {
//   console.log(x, z);
// }

 
// foo()

// var w = 1, z = 2;

// function foo(x = w + 1, y = x + 1, z = z + 1){
//   console.log(x, y, z);
// }

// foo()