

function createAndLinkObject(o){
  function F(){}
  F.prototype = o;
  return new F();
}

var anotherObject ={
  a:2
}

var myObj = createAndLinkObject(anotherObject);

myObj.a