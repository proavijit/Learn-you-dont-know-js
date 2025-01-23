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
