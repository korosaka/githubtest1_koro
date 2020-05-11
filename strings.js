let fruit = "banana";
let fruit1 = "banana, orange, mango";
let moreFruit = "banana \n apple";

var text = document.getElementById("someText");
text.innerHTML = moreFruit;
console.log(moreFruit);

console.log(fruit.indexOf("a"));
console.log(fruit.slice(2.5));
console.log(fruit.replace('ban', '123'))
console.log(fruit);
console.log(fruit.toUpperCase());

console.log(fruit.charAt(2));

// var: before ES6 => let
console.log(fruit.split(""));
console.log(fruit1.split(","));
