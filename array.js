let somenumbers = [ 5,3,6,8,11,7];
console.log(
    somenumbers.sort(function (a, b){
    return a - b;
    }),
);

let emptyArray = new Array();
for (let num = 0; num <= 100; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);