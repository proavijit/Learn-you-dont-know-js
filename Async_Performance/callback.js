

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