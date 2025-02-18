


// var x = 2,y = 3;
// var obj = {
//    x: x,
//    y: y
// }


// var x = 2, y = 3;

// var obj = {x, y}

// console.log(obj);

// var obj = {
//   a () {
//     console.log("Something a");
//   },
//   y  (){
//     console.log("Something b");
//   }
// }

// console.log(obj.a());


function runSomething(o) {
    var x = Math.random(),
        y = Math.random();
    return o.something(x, y);
}

runSomething({
    something: function something(x, y) {
        if (x > y) {
            return something(y, x); // রিকারশন
        }
        return y - x;
    }
});

// var prefix = "user_";


// var o = {
//   baz(){console.log("baz function");},

//   [prefix + "foo"]: function(){console.log("user_foo functon");},
//   [prefix + "foo"]: function(){console.log("user_foo functon");},
// }

// console.log(o);

// o.user_foo();
// o.user_foo();


// var o {
//   [Symbol.toStringTag]: "custom Object"
// }

// console.log(o.toString());


// var o1 = {
//   greet(){
//     console.log("Hello from o1");
//   }
// };

// var o2 = {
//   __proto__: o1,
//   name: "Object 2"
// };

// o2.greet()
// console.log(o2.name);


// var o1 = {
//   greet(){
//     console.log("Hello from o1");
//   }
// };

// var o2 = {
//   name: "Object 2"
// }

// Object.setPrototypeOf(o2, o1);

// o2.greet();

// console.log(o2.name);


// var o1 = {
//   greet(){
//     console.log("Hello from o1");
//   }
// };

// var o2 = Object.create(o1);
// o2.name = "Object 2";

// o2.greet();
// console.log(o2.name);


// const persion = {
//   greet: function(){
//     console.log(`Hello Amar namr${this.name}`);
//   }
// }

// const john = Object.create(persion, {
//   name: {
//     value: "John",
//     writable: true,
//     enumerable: true,
//     configrable: true
//   }
//   age:{
//     value: 30,
//     writable: false,
//     enumerable: true,
//     configurable: false
//   }
// });

// john.greet();

// var o1 = {
//   foo(){
//     console.log("o1:foo");
//   }
// }
// var o2 = {
//   foo(){
//     super.foo();
//     console.log("o2:foo");
//   }
// }

// Object.setProtypeof(o2, o1);

// o2.foo()


// var message = `Hello Avijit

// How are you doind today`

// console.log(message);


// var a = 10, b = 20;

// console.log(`The sum is ${a + b}`)

// var user = "Avijit";
// var welcome = `Welcome ${user.toUpperCase()}`;

// console.log(welcome);


// function foo(strings, ...values){
//   console.log(strings);
//   console.log(strings);
// }

// var desc  "awasome";
// foo`Everything is ${desc}`


// function dollabillsyall(strings, ...values){
//   return strings.reduce(function(s, v, idx){
//     if(idx > 0){
//       if(typeof values[idx - 1] == "number"){
//         s += `$${values[idx-1].toFixed(2)}`;
//       }else {
//         s += values[idx - 1];
//       }
//     }
//     return s + v;
//   }, "")
// }

// var amt1 = 11.99, amt = amt1 * 1.08, name = "Kyle";

// var text = dollabillsyall`Thanks for your purchases ${name} Your Product cost was ${amt1}`;

// console.log(text);


// const sum  = (x, y) => {
//   let result = x + y;
//   return result;
// }

// const numbers = [1,2,3,4,5];

// const doubled = numbers.map(num => num * 2);
// console.log(doubled);


// var controller = {
//   makeRequest: function(){
//     var self = this;
//     btn.addEvenListener("click", function(){
//       self.makeRequest()
//     }, false)
//   }
// }


// var a = ["a", "b", "c", "d", "e"];

// for (var val of a ){
//   console.log(val);
// }

// var a = ["a", "b", "c", "d", "e"];

// var it = a[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// var obj = { a: 1, b: 2, c: 3 };

// // Object.entries() ব্যবহার করলে key-value জোড়া পাবে:
// for (var [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }
// // আউটপুট: 
// // "a" 1
// "b" 2
// "c" 3


// for(var c of "hello"){
//   console.log(c);
// }

// var o = {};

// for(o.a of [1,2,3]){
//   console.log(o.a);
// }

var numbers = [10,20, 30, 40]

for (const num of numbers) {
  if(num === 30) break;
  console.log(num);
}
