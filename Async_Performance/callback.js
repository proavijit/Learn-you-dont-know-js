

listen("click", function handler(evt){
  setTimeout(() => {
    ajax("http://some.url.1", function response(text){
      if(text == "hello"){
        handler()
      }else if(text === "world"){
        request()
      }
    })
  }, 500);
})





listen("click", handler);

function handler(){
  setTimeout(request, 500);
}

function request(){
  ajax("http://some.url.1", responce);
}

function responce(text){
  if(text == "hello"){
    handler()
  } else if(text == "world"){
    responce()
  }
}


function requestData(url){
  return new Promise((resove, reject) => {
    ajax(url, function(responce){
      if(responce){
        resove(responce);
      }else{
        reject("Error Fetching Data...")
      }
    })
  })
}

requestData("http://example.com")
.then(responce =>console.log(responce))
.catch(error => console.log(error))
var tracked = false;


analytics.trackPurchase(purchaseData, function(){
    if (!tracked) {
        tracked = true;
        chargeCreditCard();
        displayThankyouPage();
    }
});


function addNumbers(x, y) {
  // নিশ্চিত করুন যে ইনপুটটি সংখ্যায় রয়েছে
  if (typeof x != "number" || typeof y != "number") {
    throw Error("Bad parameters");
  }
  // এখানে + নিরাপদে গাণিতিক যোগফল করবে
  return x + y;
}
addNumbers(21, 21); // 42
addNumbers(21, "21"); // Error: "Bad parameters"



function sucess(data){
  console.log(data);
}

function failure(err){
  console.log(err);
}

ajax("http://some.url.1", success, failure)


function timeoutPromise(delay){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      reject("Timeout!")
    },deley)
  })
}

Promise.race([
  foo(),
  timeoutPromise(3000)
])
.then(function(){

})

function(err){

}



function makeCoffee(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("কফি তৈরি!");
      resolve("কফি prostut")
    })
  })
}

// Step 2

function doWork(coffe){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('কিছু কাজ করা হচ্ছে...');
      resolve("কাজ শেষ!")
    }, 2000);
  })
}

// Step 3 Netflix dakha

function watchNetflix(work){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log("Netflix দেখা হচ্ছে...");
     resolve("Beeing watching seson is done...")
    }, 1500);
  })
}



makeCoffee()
.then(coffee => doWork(coffee))
.then(work => watchNetflix(work))
.then(result => console.log(result);)
.catch(err => console.log('একটা সমস্যা হয়েছে!', err);)doWork



window.addEventListener("unhandledrejection", function(event){
  console.error("Underline Promise Rejection", event.reason)
})



var p1 = Promise.resolve("Success");
var p2 = Promise.reject("Failed");
var p3 = Promise.resolve("won't execite");


Promise.all([p1, p2, p3])
.then(console.log)
.catch(console.error)


const p1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json());
const p2 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(res => res.json())

Promise.all([p1, p2])
.then(data => console.log("All completed:", data))
.catch(error => console.log("One failed", error))



const p1 = new Promise(resolve => setTimeout(() => resolve("First"), 500))
const p2 = new Promise(resolve => setTimeout(() => resolve("Secoend"), 1000))

Promise.race([p1, p2])
.then(result => console.log("Winner", result));
.catch(error => console.error("Error", error));


function timrout(ms){
  return new Promise((_, reject) => setTimeout(() => reject("Timeout"), ms))
}

Promise.race([
  fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json())
  timeoutPromise(3000)
])

.then(data => console.log("Sussess:", data))
.catch(err => console.error("Failed", err))



function foo(){
  return new Promise((resove) => {
    setTimeout(() => {
      resolve("Data Fached Successfully......")
    }, 2000);
  })
}


foo()
.then((data) => console.log(data))
.catch((err) => console.error("Error:", err))
.finally(() => console.log("Cleanup Done!"))


const p1 = Promise.resolve(10)
const p2 = Promise.resolve(20)
const p3 = Promise.resolve(30)

Promise.all([p1, p2, p3]).then(console.log)


const p1 = Promise.resolve(10)
const p2 = Promise.resolve("Error")
const p3 = Promise.resolve(30)

Promise.all([p1, p2, p3])
.then(console.log)
.catch(console.error)


const p1 = new Promise((resolve) => setTimeout(()=> resolve("P1 done"), 100))
const p1 = new Promise((resolve) => setTimeout(()=> resolve("P1 done"), 500))

Promise.race([p1, p2]).then(console.log)


function any(promises){
  return new Promise((resolve, reject) => {
    let rejecticons = [];
    let count = 0;


    Promises.forEach((p, index) => {
      Promise.resolve(p)
      .then(resolve)
      .catch(err => {
        rejecticons[index] = err;
        count++;
        if(count === promises.length){
          reject(rejecticons)
        }
      })
    })

  })
}

const p1 = Promise.reject("Error 1");
const p2 = Promise.resolve("Success");
const p3 = Promsie.reject("Error 2")


any([p1, p2, p3])
.then(console.log)
.catch(console.log;)

any([p1, p3])

.then(console.log)
.catch(console.error)


function first(Promises){
  return new Promises((resolve) => {
    promise.forEach(p => {
      Promise.resolve(p).then(resolve);
    })
  })
}

const p1 = new Promise((resolve, reject) => setTimeout(reject, 500, "Error1"));
const p2 = new Promise((resolve) => setTimeout(resove), 100, " Success")

first([p1, p2].then(console.log))