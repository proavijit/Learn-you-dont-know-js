

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
.catch(err => console.log('একটা সমস্যা হয়েছে!', err);)