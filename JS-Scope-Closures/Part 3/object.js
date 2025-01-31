

// var strPrimitive = "I am a String";

// console.log(strPrimitive instanceof String);

// var strObject = new String("I am String");

// console.log(typeof strObject)
// console.log(strObject instanceof String);


// console.log(Object.prototype.toString.call(strObject));

// var myObject = {
//   a: 2
// }

// console.log(myObject.a);

// myObject['a']

// var myObject = {
//   a: 2
// };
// var idx;
// if (wantA) {
//   idx = "a";
// }
// // পরে
// console.log(myObject[idx]); // 2


// var myObject = {};

// console.log(myObject[false] = "foo");

// const eventListeners = new WeakMAp();


// function addEventListener(target, callback){
//   eventListeners.set(target, callback)
// }

// function targeterEvent(target){
//   const callback = eve
// }

// var myObject = {
//   foo: function() {
//     console.log("foo");
//   }
// };

// var someFoo = myObject.foo;

// console.log(someFoo);// function foo(){..}
// console.log(myObject.foo;);// function foo(){..}
//  // function foo(){..}


// const obj = { a: 1, nested: { b: 2 } };
// const clone = Object.assign({}, obj);

// clone.nested.b = 3;
// console.log(obj.nested.b); // 3 (নেস্টেড অবজেক্ট রেফারেন্স কপি হয়েছে)

var myObject = {
  a: 2
}

var Something ={
  cool: function (){
    this.greeting = "Hello world";
    this.count = this.count ? this.count + 1 : 1;
  }
}

Something.cool();
Something.greeting;
Something.count;

var Anothor = {
  cool: function(){
    Something.cool.call(this);
  }
}

Anothor.cool();
Anothor.greeting;
Anothor.count;

var foo = {
  Something: function(){
    console.log("Tell  me something good...");

  }

  var bar =  Object.create(foo);
  bar.something();
}

var anotherObject = {
  a: 2
};

var myObject = Object.create(anotherObject, {
  b:{
    enumerable: false,
    writable: true,
    configurable: false,
    value:3
  },
  c:{
    enumerable: true,
    writable: false,
    configurable: false,
    value: 4
  }
})

myObject.hasOwnProperty("a");
myObject.hasOwnProperty("b");
myObject.hasOwnProperty("c");

myObject.a
myObject.b
myObject.c