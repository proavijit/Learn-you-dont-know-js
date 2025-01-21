
if(a == 2){
  //something 
}else if(a == 10){
  // ANOTHER SOETHING
} else if(a == 42){
  /// more anything 
} else {
  // anything else...
}

this accually solved swith statement

switch(a){
  case 2:
    // first colum anything 
    break;
    case 10:
      // anything ........
      break;
      case 42:
        // anything more 
        break;
        default: 
        // use a fallback 
}

switch(a){
  case 2:
    case 10:
      //something coole work
      break;
      case 42:
        // anything else work
        break;
        default: 
        // some fallback....
}

var a = 42;
var b = (a > 41) ? "Hello" : "world";

// এটি এর সমতুল্যঃ

if(a > 41){
  b = "Hello"
}else{
  b = "world"
}