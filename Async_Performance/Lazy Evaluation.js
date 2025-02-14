var steps = ASQ.iterable()
.then(function STEP1(token){
  var url = token.message[0].url;
  if(token.message[0].format){
    steps.then(token.message[0].format);
  }
  return request(url)
})
.then(function STEP2(resp){
  if(/x1/.test(resp)){
    steps.then(function STPES(text){
      return request("http://some.url.4/?v=" + text)
    })
  }
  return ASQ().gate(
    request("http://some.url.2/?v=" + resp),
    request("http://some.url.2/?v=" + resp)
  )
})
.then(function STEP3(r1, r2){
  return r1 + r2
})

var main = ASQ({
  url:"http://some.url.1",
  format: function STEP4(text){
    return text.toUpperCase()
  }
})
.runner(steps)
.val(function(msg){
  console.log(msg);
})