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


ASQ.react(function setup(next){
  document.getElementById("mybtn")
  .addEventListener("click", next, false)
})
.seq(function(evt){
  var = btnID = evt.target.id;
  return request("http://some.url.1/?id=" + btnID)
})
.val(function(text){
  console.log(text);
})

var sq = ASQ.react(function setup(next, registerTeardown){
  var btn = document.getElementById("mybtn");
  btn.addEventListener("click", next, false)

  registerTeardown(function(){
    btn.removeEvenetListener("click", next , false)
  })
})
.seq()
.then()
.val()
.sq.stop()


var prevState ;

ASQ(
  2
)
.runner(
  state(1, function* stateOne(transation){
    console.log("in state 1");
    prevState = 1;
    yield transation(3)
  })
)

state(2, function* stateTwo(transition){
  console.log("in state 2");
  prevState = 2; 
  yield transition(3)
})


state(3, function* stateThree(transation){
  console.log("in state 3");
  if(prevState === 2){
    pevState = 3;
    yield  transation(1)
  }else{
    yield "That is all falks";
    prevState = 3;
    yield transation(false);
  }
})

.val(function(msg){
  console.log(msg);
})

const csp = require('js-csp');

function* sender(channel){
  yield csp.put(channel, "Hello kamon aso");
  yield csp.timeout(1000);

  yield csp.put(channel, "Ok tell me a joak");
  yield csp.settimeout(1000);

  yield csp.put(channel, "Dog sleeping in road")
}


function* recever(channel){
  while(true){
    let message = yield csp.take(channel);
    console.log("Message Recived,", message );
  }
}