const myMap = new Map();


myMap.set('name', 'Jon Doe');
myMap.set(1, 'A Number');
myMap.set(true, "A Boolean");
const myObject = {};
myMap.set(myObject, "Define a object key")

console.log(myMap.get(true));

console.log(myMap.has('name'));
console.log(myMap.has('age'));

console.log(myMap.size);
console.log(myMap.size);


for(const [key, value] of myMap){
  console.log(`key ${key}, value: ${value}`);
}



for(const value of myMap.values()){
  console.log(`key: ${value}`);
}