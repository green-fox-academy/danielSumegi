'use-strict';

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numList: number[] = [1, 2, 3, 4 ,5];

let thirdElement: number = numList[2] += 1;

console.log(numList[2]);
console.log(numList);

let x = numList.map(function(item) {
    /* if (item == numList[2]) {
        item++;
        console.log(item);
    } */
    return item = item+ 1;
})

console.log(numList);
console.log(x);