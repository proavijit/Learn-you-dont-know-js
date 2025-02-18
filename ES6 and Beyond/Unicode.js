var snowman = "\u2667";

console.log(snowman);

var s1 = "\xE9",     
    s2 = "e\u0301";   
console.log(s1);  
console.log(s2); 

console.log([...s1].length);   
console.log([...s2].length);   
