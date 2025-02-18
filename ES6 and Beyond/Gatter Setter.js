
var o = {
  __id: 10,
  get id(){
    return this.__id++;
  },
  set id(v){
    this.__id = v;
  }
}

console.log(o.id);
console.log(o.id);

o.id = 20;
console.log(o.id);

console.log(o.__id);
console.log(o.__id);


class Persion{
  constructor(name){
    this._name = name;
  }

  get name(){
    return this.__name.toUpperCase();

  }

  set name(newName){
    this.__name = newName.trim()
  }

}

let p = new Persion("John Doe");
console.log(p.name);

p.name = "Alice";

console.log(p.name);