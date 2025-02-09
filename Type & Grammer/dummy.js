// var a, b;
// a = eval("if (true) { b = 4 + 38; }");
// console.log(a); // 42
// console.log(b); // 42


// let a = 42;

// var b = "foo";

// console.log(a && b)

// console.log(a || b);

// var a = 42;
// var b = "foo";
// var c = [1,2,3];

// console.log(a && b)




// var a = 42;
// var b = "foo";
// var c = [1,2,3];

// console.log(a && b || c)
// console.log(a || b && c)


// funsction foo(a = 42, b = a + 1) {
//   console.log(
//     arguments.length,
//     a,
//     b,
//     arguments[0],
//     arguments[1]
//   )

// console.log(foo())

// console.log(foo(10))

// console.log(foo(10, undefined)) 

function foo(){

  bar: {
    try {
      return 42;
    } catch (error) {
      
    } finally{

      break bar
    }
  }

  console.log('Crazy')

  return "Hello"
}

console.log(foo())

console.log(foo())