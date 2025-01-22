

function makeAdder(x){
  // x is inner variable 

  function add(y){
    return y + x;

  }
  return add;
}


// `makeAdder` ফাংশন কল করে দুটি নতুন ফাংশন তৈরি করা হচ্ছে
var pluseOne = makeAdder(1);
var plusTen = makeAdder(10);

// ফাংশনগুলোর আউটপুট দেখুন

console.log(pluseOne(3));
console.log(pluseOne(41));
console.log(pluseOne(13));

console.log("..........1-");

function counter(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}

const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

