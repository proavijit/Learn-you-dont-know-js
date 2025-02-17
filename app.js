


// function foo(){
//   return [1,2,3]
// }

// var tmp = foo(),
//                 a = tmp[0], b  = tmp[1], c = tmp[2];

//                 console.log(a,b,c);


// function foo(){
//   return [1,2,3]
// }

// var [a, b, c] = foo();

// console.log(a, b, c);


// function foo(){
//   return [1,2,3]
// }

// var tmp = foo(),

// a = tmp[0]
// b = tmp[1]
// c = tmp[2]


// console.log(a, b,c);


// function foo() {
//   return {
//     a: 4,
//     b: 5,
//     c: 6
//   };
// }

// var tmp = bar(),
//     x = tmp.x, 
//     y = tmp.y, 
//     z = tmp.z;

// console.log(x, y, z); // 4 5 6


// var {a,b,c} = foo();

// var {a = 10, b = 20, c = 30} = foo()

// console.log(a,b,c);


// var persion = {
//   name: "Avijit",
//   address: {
//     city: "Jashore",
//     country: "Bangladesh"
//   }
// }

// let {name, address: {city, country}} = persion;

// console.log(name, city, country);


// var numbers = [3,4,[6,7],9];

// var [first, secound,[third,fourth], nine] = numbers;

// console.log(first, secound, third,fourth, nine);

// functon parameter destructuring

// function greet(para){
//   let {name, age} = para;
//   console.log(`Hello, my name is ${name} and i am ${age} yeard old`);
// }

// var user = {name:"Avijit", age:25};

// greet(user)


// function bar(){
//   return {x: 4, y: 5, z: 6}
// }

// var {x: bam,y: baz,z: bap} = bar()

// console.log(bam, baz, bap);

// var x = 10, y = 20;

// var o = { a: x, b: y};

// console.log(o.a,o.b);

// var x = 2, y = 3
// var {x: AA, y: BB} = bar();

// console.log(AA, BB);

// const user1 = { name: "Avijit", age: 25, city: "Jashore" };
// let user2 = {};

// ({ name: user2.fullName, age: user2.userAge, city: user2.location } = user1);

// console.log(user2); 
// // { fullName: "Avijit", userAge: 25, location: "Jashore" }


// let a = 10, b = 20;

// let temp = a;

// a = b;
// b = temp;

// console.log(a, b);


// let a = 10, b = 20;

// [a, b]  = [b, a];

// console.log(a, b);



// const user = {name: "Avijit"};

// const {name, age = 25} = user;

// console.log(name, age);

// var {a: {x: X}}

// var o = {a: 1, b:2, c: 3},

// a, b, c, p;

// p = {a, b, c} = o;

// console.log(a,b,c);
// console.log(p === o);


// var o = {a: 1, b: 2, c: 3},
//     p = [4, 5, 6],
//     a, b, c, x, y, z;

//     ({a} = {b, c} = o);
//     [x, y] = [z] = p;
//     console.log(a, b, c);
//     console.log(x, y ,z);

function foo(){
  return [1,2,3]
}

function bar(){
  return {x: 4, y: 5, z: 6};
}

// var [, b] = foo();
// var {x, z} = bar();

// console.log(b);
// console.log(x, z);


// var [,, c, d] = foo();
// var {w, z} = bar();

// console.log(c, z);
// console.log(d, w);



// var a = [2,3,4];
// var b = [1, ...a, 5];

// console.log(b);


// var a = [2,3,4];
// var [b, ...c] = a;

// console.log(b, c);


// var obj = {a: 1, b: 2, c: 3};
// var {a, ...rest} = obj;

// console.log(a);
// console.log(rest);


// var [a = 3, b = 6, c = 9, d = 12] = foo();
// console.log(a, b, c, d);

// var {x = 5, y = 10, z = 15, w = 20} = bar();

// console.log(x, y, z, w);

// var {x, y, z, w: WW = 20} = bar();

// console.log(x,y,z, WW);


// var x = 200, y = 300, z = 100;

// var o1 = { x: { y: 42 }, z: { y: z } };

// ( { y: x = { y: y } } = o1 );

// console.log(x.y);


// var a1 = [1, [2,3,4],5];
// var o1 = {x: {y: {z: 6}}};
// var [a, [b, c, d], e] = a1;
// var {x: {y: {z: w}}} = o1


// console.log(a,b,c,d,e);
// console.log(w);




var App = {
  model: {
    User: function(){console.log("Hello sss");}
  }
}

var {model: {User}} = App;


console.log(User());
