//  var buf = new ArrayBuffer(32);
//  console.log(buf.byteLength);

// var buf = new ArrayBuffer(2);
// var view8 =  new Uint8Array(buf);
// var = view16 = new Uint16Array(buf);

// view16[0] = 3085;

// console.log(view8[0]);
// console.log(view8[1]);

// console.log(view8[0].toString(16))
// console.log(view8[1].toString(16))


// var tmp = view8[0];
// view8[0] = view8[1];
// view8[1] = tmp;

// console.log(view16[0])





// var buf = new ArrayBuffer(10);

// var view16 = new Uint16Array(buf, 0,2);
// var view8 = new Uint8Array(buf, 2, 2);
// var viewFloat = new FloatArray(buf, 4, 1);


// view16[0] = 5000;
// view8[0] = 255;
// view8[1] = 100;

// viewFloat[0] = 12.34;

// console.log(view16[0]);
// console.log(view8[0]);
// console.log(view8[1]);
// console.log(viewFloat[0]);



// var buf = new ArrayBuffer(2);
// var view8 = new Uint8Array(buf);
// var view16 = new Uint16Array(buf);

// view16[0] = 3085;

// console.log(view8);
// console.log(view8[1]);

// var tmp = view8[0];
// view8[0] = view8[1];
// view8[1] = tmp;

// console.log(view8[0])


// var a = new Init32Array(3);

// a[0] = 10;
// a[1] = 20;
// a[2] = 30;

// console.log(a);



// var b = new Uint8Array([10,20,30]);
// var c = new Uint16Array(b);

// console.log(c)


// var d = new Float32Array({length: 2});
// console.log(d)


// var arr = new Init32Array([10, 20, 30])


// var arr = new Init32Arra([10, 20,30]);

// arr.map(v => console.log(v));

// console.log(arr.join("-"))


// var a = [10, 1, 2];

// a.sort();

// console.log(a);

// var b = new Uint8Array([10, 1, 2]);

// b.sort();
// console.log(b);


// var buf = new ArrayBuffer(2);
// var view8 = new Uint8Array(buf);
// var view16 = new Uint16Array(buf);

// view16[0] = 3085;

// console.log(view8[0]);
// console.log(view8[1]);
// console.log(view8[0].toString(16))
// console.log(view8[1].toString(16))


// var tmp = view8[0];
// view8[0] = view8[1];
// view8[1] = tmp;
// console.log(view16[])



// var m = {};
// var x = {id:1}, y = {id: 2};

// m[x] = "foo";
// m[y] = "bar";

// console.log(m[x])


// var m =  new Map([
//   [{id 1}, "foo"],
//   [{id: 2}, "bar"]
// ]);

// console.log(m);



// var m = new Map();
// var x = {id: 1}, y = {id: 2};

// m.set(x, "foo");
// m.set(y, "bar");

// var vals = [...m.values()];

// console.log(vals);

// console.log(Array.from(m.values()))


// var m = new Map();
// var x = {id: 1}, y = {id: 2};

// m.set(x, "foo");
// m.set(y, "bar");

// var entries = [...matchMedia.entries()];

// console.log(entries[0][0] === x);
// console.log(entries[0][1]);


// console.log(entries[1][0] === y)
// console.log(entries[1][1]);


// var m = new Map();
// var x = { id: 1 }, y = { id: 2 };

// m.set(x, "foo");
// m.set(y, "bar");

// console.log(m);



// let map = new Map();
// map.set('name', 'Avijit');
// map.set('age', 25);


// console.log(map.get('name'));
// console.log(map.has('age'))


let obj = {name: 'Avijit'};
let weakmap = new weakmap();
weakmap.set(obj, 'Developer');

console.log(weakmap.get(obj))










