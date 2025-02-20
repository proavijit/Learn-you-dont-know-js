// var th = {
//   then: function thener(fullfiled){
//     setInterval(fullfiled, 100);
//   }
// }


// let conditions = true;


// const poms = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if(conditions){
//       resolve("Hello")
//     }else{
//       reject("This condition failed")
//     }
//   }, 2000);
// })



// const someThing = new Promsie((resove, reject) => {
//   fetch
//   .get("")
//   .then(function({data}){
//    let responce =  resove(data);
//    console.log(responce);
//   })
//   .catch(error => {
//     reject(error)
//   })
// })
/




function run(gen){
  var it = gen();

  return Promise.resolve()
  .then(function  handleNext(value){
    var next = it.next(value);
    return(function handleResult(next){
      if(next.done){
        return next.value;
      }else{
        return Promise.resolve(next.value).then(handleNext, function handleErr(err){
          return Promise.resolve(it.throe(err).then(handleResult);
          )
        })
      }
    })
  })
}

run(main)
  .then(() => {
    console.log("Completed successfully");
  })
  .catch((err) => {
    console.log("Error:", err);
  });
