const shopping = ["shoes", "mobile", "fruits", "grocery", "tv"];
shopping.push("freeze");
console.log(shopping);
console.log("After pushing", shopping.length)
 
const firstItem = shopping.shift();
const lastItem = shopping.pop();

console.log("Removed First Item:", firstItem);
console.log("Removed Last Item:", lastItem);

console.log("Updated Shopping List:", shopping);

let color = ["red","green","blue"];
color.splice(1,0,"yellow");
console.log(color);