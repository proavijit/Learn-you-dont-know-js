


// console.log(Object.prototype.toString.call([1,2,3])); // "[object Array]"

// console.log(Object.prototype.toString.call(/regex-literal/i)); // "[object RegExp]"


// let randomNumber = Math.floor(Math.random() * 10) + 1;

// console.log(randomNumber)





// console.log(Object.prototype.toString.call('abc')); 

// var a = "abc";
// var b = new String("abc");
// var c = Object("abc");

// console.log(a);
// console.log(b);
// console.log(c);


// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// console.log(a == b);


// var x = new Number(422);;
// console.log(x);
// console.log(typeof x);


// console.log(new String("abc") === "abc");   

// var b = [1, 2, 3];

// console.log(b.toString());   


// var e = new Array(3); 

// e.forEach((v, i) => console.log(v, i)); 

// console.log(e);


// var obj1 = {name: "John"};  


// console.log(obj1);


// var obj2 = new Object();

// obj2.name = "John";   

// obj2.age = 25;

// console.log(obj2);

// var sum2 = new Function("a", "b", "return a + b");

// console.log(sum2(2, 6));

// var re1 = /hello/;

// console.log(re1.test("Hello world"));


// var a = new Array(3);
// var  b = [undefined, undefined, undefined];

// console.log( typeof a === typeof b); // true

// console.log(b.join('-')); // "--"
// var a = Array.apply(null, {length:2});

// console.log(a);


// var obj = {name: "Avijit ", age: 25};

// console.log(obj);

// var e = new Function("a", "return a * 2");

// console.log(e(2)); // 4


var f = function(a) {
  return a * 2;
}

console.log(f); // 4