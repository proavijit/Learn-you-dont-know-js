// function identyfy(){
//   return this.name.toUpperCase();

// }

// function speak(){
//   var greeting = "Hello, I'm" + identyfy.call(this);
//   console.log(greeting);
// }

// var me = {
//   name: "Kale"
// }
// var you = {
//   name: "Reader"
// }

// console.log(identyfy.call(me));
// console.log(speak.call(you));

// this ফাংশনের ভেতরে ফাংশনকেই নির্দেশ করে না।

// function foo(num){
//   console.log("foo" + num);

//   // mone hocche ata foo er count baracca
//   this.count++;

// }

// foo.count = 0;


// for(let i = 0; i < 10; i++){
//   if(i > 5 ){
//     foo(i)
//   }
// }

// console.log(foo.count);


// function foo(num){
//   console.log("foo" + num);
//   foo.count++;
// }

// foo.count = 0;

// for(let i = 0; i < 10; i++){
//   if(i > 5){
//     foo(i)
//   }
// }

// console.log(foo.count)


// function foo(num){
//   console.log("foo" + num);
//   foo.count++;
// }

// foo.count = 0;

// for(let i = 0; i < 10; i++){
//   if(i > 5){
//     foo(i)
//   }
// }

// console.log(foo.count)
// function foo(num){
//   console.log("foo" + num);
//   foo.count++;
// }

// foo.count = 0;

// for(let i = 0; i < 10; i++){
//   if(i > 5){
//     foo(i)
//   }
// }

// console.log(foo.count)
// function foo(num){
//   console.log("foo" + num);
//   foo.count++;
// }

// foo.count = 0;

// for(let i = 0; i < 10; i++){
//   if(i > 5){
//     foo(i)
//   }
// }

// console.log(foo.count)
// function foo(num){
//   console.log("foo" + num);
//   foo.count++;
// }

// foo.count = 0;

// for(let i = 0; i < 10; i++){
//   if(i > 5){
//     foo(i)
//   }
// }

// console.log(foo.count)
// function foo(num){
//   console.log("foo" + num);
//   foo.count++;
// }

// foo.count = 0;

// for(let i = 0; i < 10; i++){
//   if(i > 5){
//     foo(i)
//   }
// }

// console.log(foo.count)