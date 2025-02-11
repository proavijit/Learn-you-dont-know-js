
function* myGenerator(){

  yield 1;
  yield 2;
  yield 3

}

const gen = myGenerator()

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


function* idGenerator(){
  let id = 1;
  while(true){
    yield id++;
  }
}

const gen = idGenerator()

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


function* iterateArray(arr) {
  for (let item of arr) {
    yield item;
  }
}

const gen = iterateArray(["A", "B", "C"]);
console.log(gen.next().value); // "A"
// console.log(gen.next().value); // "B"
// console.log(gen.next().value); // "C"
