


function asyncGenerator(genFunc){
  const gen = genFunc()

  function handle(yielded){
    if(yielded.done) return Promise.resolve(yielded.value);
    return yielded.value.then((result) => handle(gen.next(result)))
  }

  return handle(gen.next());
}


asyncGenerator(function* (){
  console.log("Loading......");
  const user = yield new Promise((resolve)=> 
  setTimeout(() => {

    resolve("Use fetched!")
    
  }, 2000);
  );
  console.log(user);
})















async function foo(x, y){
  let responce = await fetch(`http://some.url.1/?x=${x}&y=${y}`);
  let data = await responce.text();
  return data;
}

async function main(){
  try{
    let text = await foo(11, 31);
    console.log(text);

  }catch(err){
    console.error(err);
  }
}

main()


async function* asyncGen(){
  yield await new Promise(resolve => setTimeout(() => {
    resolve("Data 1")
  }, 1000);)
}

async function fetchData(){
  for await (const data of asyncGen()){
    console.log(data)
  }
}

fetchData()


function* main(){
  try {
    var text = yield foo(11, 31);
    console.log(text);
  } catch (error) {

    console.err(error);
    
  }
}


function* main(){
  var x = yield "Hello world";
  yield x.toLowerCase()
}

var it = main();
it.next()

try {
  it.next(42);
} catch (error) {
  console.error(error)
}



function* main(){
  var x = yield "Hello world";
  console.log(x)
}

var it = main();
it.next();

try{
  it.throw ("Opps");
  
}catch(err){
  console.error(err)
}


const myPromises = new Promises((resolve) => {
  setTimeout(() => {
    resolve("Data Loded!")
  }, 2000)
})

myPromises.then((data) => console.log(data);)



function* fetchData(){
  console.log("Fetching data.......");
  const data = yield new Promises((resolve) => setTimeout(() => resolve("User data received!")))
  console.log(data);
}

const gen = fetchData()
const promise = gen.next().value;

promise.then((result) => gen.next(result));



function *foo(){
  var results = yield Promise.all([
    request("http://some.url.1")
    request("http://some.url.1")
  ])

  var [r1, r2] = results;

  var r3 = yield request("http://some.url.3/?v=" + r1 + "," + r2)
 console.log(r3);
}

foo(foo)