

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

function process(data){
  // something inportant 
}

var someReallyBigDtata = (...);

process(someReallyBigData);

var btn = document.getElementById("my_button");
btn.addEventListener("click", function click(evt){
  console.log("button clicked");
})


function process(data){
  // some work.......
}{
  let someReallyBigData = {...};
  process(someReallyBigData);
}

var btn = document.getElementById("my_buttion");
btn.addEventListener('click', function click(evt){
  console.log("buttion clicked");
})

function Foo(who){
  this.me = who;
}
Foo.prototype.identyfy = function(){
  return "I am " + this.me;

}

function Bar(who){
  Foo.call(this, who);

}

Bar.prototype = Object.create(foo.prototype);
Bar.prototype.speak = function(){
  alert("Hello "+ this.identyfy() + ".")
}

var b1 = new Bar("b1";);
var b2 = new Bar("b2");

b1.speak();
b2.speak()




var Widget = {
  this.width = width || 50;
  this.height =  height || 50;
  this.$elem = null;
},
insert: function ($where) {
  if(this.$elem){
    this.$elem.css({
      width: this.width + "px",
      height: this.height + "px"
    }).appendTo($where);
  }
}

var Button = Object.create(Widget);

Button.setup = function (width, height, label) {
  this.init(width, height);
  this.label = label || "Default";
  this.$elem = $("<button>").text(this.label)
};

Button.build = function ($where) {
  this.insert($where);
  this.$elem.click(this.onClick.bind(this))
}

Button.onClick = function (evt) {
  console.log("Button" + this.label + "clicked!")
  
}

$(document).ready(function(){
  var $body = $(document.body);
  var btn1  = Object.create(Button);
  btn1.setup(125, 30, "Hello");

  var btn2 = Object.create(Button);
  btn2.setup(150, 40, "World")
})

btn1.build($body)
btn2.build($body)