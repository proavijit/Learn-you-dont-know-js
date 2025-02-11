// function* fetchData() {
//   console.log("Loading...");
//   yield new Promise((resolve) => setTimeout(() => resolve("Data loaded!"), 2000));
// }

// const gen = fetchData();
// gen.next().value.then(console.log); // 2 সেকেন্ড পর "Data loaded!" দেখাবে



// function* fetProductDataInChunks(){
//   const totalProducts = 50;
//   const chunkSize = 10;
// }

// for(let i = 0; i< totalProducts; i += chunkSize){
//   yield new Promise(resolve => {
//     setTimeout(() => {
//       resolve(`Fetched products ${i + 1} to ${Math.min(i + chunkSize, totalProducts)}`)
//     }, 1000)
//   })

//   return "All products fetched!"
// }

// const productFetcher = fetProductDataInChunks()

// async function handleFetching(){
//   let result = await productFetcher.next();
//   while (!result.done){
//     console.log(result.value);
//     result = await productFetcher.next()
//   }
//   console.log(result.value)
// }

// handleFetching()

function* fetchProductDataInChunks() {
  const totalProducts = 50;
  const chunkSize = 10;

  for (let i = 0; i < totalProducts; i += chunkSize) {
    yield new Promise(resolve => {
      setTimeout(() => {
        resolve(`Fetched products ${i + 1} to ${Math.min(i + chunkSize, totalProducts)}`);
      }, 1000);
    });
  }

  return "All products fetched!";
}

const productFetcher = fetchProductDataInChunks();

async function handleFetching() {
  let result = await productFetcher.next();
  while (!result.done) {
    console.log(result.value);
    result = await productFetcher.next();
  }
  console.log(result.value);
}

handleFetching();
