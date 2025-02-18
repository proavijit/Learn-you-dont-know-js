let re = /foo/y;

let str = '++foo++';


re.lastIndex = 2;

console.log(re.test(str));
console.log(re.lastIndex);


console.log(re.test(str));

console.log(re.lastIndex)