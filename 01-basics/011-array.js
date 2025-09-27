// const arr = [10, 23, 23, 23]; // arrays shallow copy :  reference type
// const arr2 = arr; // shallow copy : reference type

// arr2[0] = 100;

// console.log(arr);
// console.log(arr2);


// // Deep copy doesn't share the reference


// const myAr = new Array(1,2,3,4,5);
// console.log(myAr[0]);

// console.log(myAr.unshift(3)); // add at start
// console.log(myAr.push(6)); // add at end

// console.log(myAr);

// console.log(myAr.shift());
// console.log(myAr.pop());
// console.log(myAr);

// console.log(myAr.indexOf(3));




// slice and splice

const myAr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myAr2 = myAr.slice(2, 5); // does not modify the original array
console.log("myAr",myAr);
console.log("myAr2",myAr2);

const myAr3 = myAr.splice(2, 5); // modifies the original array
console.log("myAr",myAr);
console.log("myAr3",myAr3);



/**
 * 
 */