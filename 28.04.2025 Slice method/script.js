let item = ["pen", "pencil","earser","sharpner","scale"]
console.log(item.slice(-5,-3)); //["pen","pencil"];

const number = [1, 2, 3, 4, 5];

for (let i = 0; i < number.length; i++) {
  console.log(number[i] * number[i]);
}

const words = ["hello", "world", "javascript"];

words.forEach(function(word) {
  console.log(word + "!");
});


const word = ["hello", "world", "javascript"];

words.forEach(function(word, index) {
  console.log((index + 1) + ". " + word + "!");
});


const salary = [1000, 4000, 5000];
const newSalary = [];

for (let i = 0; i < salary.length; i++) {
  newSalary.push(salary[i] * 1.10);
}

console.log(newSalary);

const salary1 = [1000, 4000, 5000];
const newSalary1= [];

salary.forEach((amount) => {
  newSalary1.push(amount * 1.10);
});

console.log(newSalary);

