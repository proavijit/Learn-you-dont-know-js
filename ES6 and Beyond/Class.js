

function *foo(){
  yield 1;
  yield 2;
  yield 3;
}

var it = foo();
console.log(it.next());

try {
  it.throw("Oops!")
  
} catch (error) {
  console.log(error);
  
}

console.log(it.next());






Promise.all([
  Reflect.Loader.import("foo"),
  Reflect.Loader.import("bar")
]).then(([foo, bar ]) => {
  foo.doSomehing();
  bar.doSomethingElse()
})

Reflect.Loader.import("foo", {address: "/path/to/foo.js"})


Reflect.Loader.import("foo", {address: "/path/to"})



const userPreference = "dark";

Promise.all([
  import(`./themes/${userPrefrence}.js`),
  import("./utils/helper.js")
]).then(([theme, helper]) => {
  theme.applyTheme();
  helper.showNotification("Theme applied!")
})


document.getElementById("loadChart").addEventListener("click", () => {
  Promise.all([
    import ("./charts/pieChart.js"),
    import ("./charts/barChart.js")
  ]).then(([pieChart, barChart]) => {
    pieChart.draw();
    barChart.draw()
  })
})




function Persion(name){
  this.name = name;
}

Persion.prototype.greet = function(){
  console.log(`Hello my name is ${this.name}`);
}

const john = new Persion("John")
john.greet()



class Persion{
  constructor(name){
    this.name = name;
  }

  greet(){
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Persion("John");

john.greet()


class Employee extends Persion{
  constructor(name, job){
    super(name);
    this.job = job;
  }
  work(){
    console.log(`${this.name} is working as a ${this.job}`);
  }
}

const alice = new Emplyee("Alice", "Developer");

alice.greet()
alice.work()


const pearent = {

  greet(){
    console.log("Hello from parent");
  }
}

const child = Object.create(parent);

child.greet()




function Foo(a, b){
  this.x = a;
  this.b = b
}

Foo.prototype.gimmeXY = function(){
  return this.x * this.y;
}

const f = new Foo(5, 15);
console.log(f,x);
console.log(f.y);
console.log(f.gimmeXY());


class Foo{
  constructor(a, b){
    this.x = a;
    this.y = b;
  }

  gimmeXY(){
    return this.x * this.y;
  }

}

const f =  new Foo(5, 15);

console.log(Foo.x);
console.log(f.y);
console.log(f.gimmeXY());


class Animal{
  constructor(name){
    this.name = name;
  }

  makeSound(){
    console.log("Some generic sound...");
  }
}

class Dog extends Animal{
  constructor(name,breed){
    super(name);
    this.breed = breed;
  }

  makeSound(){
    console.log("Woof Woof");
  }

}


const myDog = new Dog("Buddy", "Golden Retriver");
console.log(myDog.name);
console.log(myDog.breed);
myDog.makeSound()


class customerClass{
  static[Symbol.hasInstancce](instance){
    return instance.isCustom === true;
  }
}

const obj = {isCustom: true};

console.log(obj instanceof customerClass);


class Parent {
   constructor(name){
    this.name = name;
   }

   greet(){
    console.log(`Hello, ${this.name}`);
   }
}

class Child extends Parent{}

const childInstance = new Child("Avijit");

childInstance.greet()


class Parent {
  constructor(name){
    this.nam = name;
  }
}

class Child extends Parent{
  constructor (name, age ){
    super(name);
    this.age = age;
  }
}

const childInstance = new Child("Avijit", 25);

console.log(childInstance.name);
console.log(childInstance.age);




class Parent{
  greet(){
    return "Hello from parent!";
  }
}

class Child extends Parent {
  greet(){
    return super.greet() + "And hello from CHhild"
  }
}

const childInstance = new Child();
console.log(childInstance.greet());


class Parent {
  constructor(name){
    this.name = name;
  }
}

class Child extends Parent{
  constructor(name, age){
    super(name);
    this.age = age
  }
}


class Parent {
  greet(){
    console.log("Hello from parent");
  }
}

class Child extends Parent{
  greet(){
    super.greet();
    console.log("Hello from Child")
  }
}


const childInstannce = new Child();
childInstannce.greet();

const anotherChild = { greet: childInstannce.greet};

anotherChild.greet()




// function ajax(ul){
//   return new Promise(function(resolve, reject){

//   })
// }


// ajax("http://some.url.1")
// .then(function fulfiled(contents){

// })
// .catch(function reject(reason){

// })

// ajax("http://some.url.1")

// .then(function fulfiled(contents){
//   return ajax("http://some.url.1 + contents");

// })

// .then(function fulfiled(contents){
//   console.log("Final Responce", contents);
// })

// .catch(function rejected(reason){
//   console.error("Error:", reason);
// })


// ajax("http://some.url.1")
// .then(function(contents){
//   throw new Error("SOmething went wrong");

// })

// .catch(function(error){
//   console.error("Caught error", error);
// })



ajax("http://some.url.1")

.then(function fulfiled(contents){
  return contents.toUpperCase();
})

.then(function fulfiled(data){
  console.log(data);
})

.catch(function rejected(error){
  console.log("erroe", error);
})

ajax("http://some.url.1")
    .then(function fulfilled(contents) {
        return ajax("http://some.url.2?v=" + contents);
    })
    .then(function fulfilled(contents) {
        console.log("নতুন URL থেকে ডেটা:", contents);
    })
    .catch(function rejected(error) {
        console.log("ত্রুটি:", error);
    });
