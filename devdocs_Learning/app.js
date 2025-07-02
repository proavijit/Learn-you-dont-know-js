// let fruits = []
// fruits.push("banana", "apple", "peach");
//  fruits[5] = "mango"
// console.log(fruits[5]);
// console.log(fruits.length);
// console.log(Object.keys(fruits))
// console.log(fruits[8])
// fruits.length = 2;
// console.log(Object.keys(fruits))



const colors = ['red', 'yellow', 'blue'];
colors[5] = 'purple';
console.log(Object.keys(colors))

colors.forEach((item, index) => {
  console.log(item)
})

colors.reverse()
console.log(colors)
colors.forEach((item, index) => {
  console.log(item)
})