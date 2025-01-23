
function CoolModule(){
  var something = "cool";
  var another = [1,2,3];

  function doSomething(){
    console.log(something); // access private data
  }

  function doAnother(){
    console.log(another.join(" ! "));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  }
}

var foo = CoolModule();

foo.doSomething();
foo.doAnother();


var foo = (function CoolModule(){
  var something = "cool";
  var another = [1,2,3];

  function doSomething(){
    console.log(something);
  }

  function doAnother(){
    console.log(another.join(" ! "));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  }
})();

foo.doSomething();
foo.doAnother()

function CoolModule(id) {
  function identify() {
    console.log(id); // প্যারামিটার ব্যবহার করছে
  }

  return {
    identify: identify,
  };
}

var foo1 = CoolModule("foo 1");
var foo2 = CoolModule("foo 2");

foo1.identify(); // "foo 1"
foo2.identify(); // "foo 2"


var foo = (function CoolModule(id) {
  function change() {
    // Public API এর identify মেথড পরিবর্তন করা হচ্ছে
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log(id);
  }

  function identify2() {
    console.log(id.toUpperCase());
  }

  var publicAPI = {
    change: change,
    identify: identify1,
  };

  return publicAPI;
})("foo module");

foo.identify(); // "foo module"
foo.change();
foo.identify(); // "FOO MODULE"
