/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/


function sumToN(n) {
  return num && num + sumToN(num - 1);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}

// if (num < 0) {
//   return null;
// }
// if (num === 0) {
//   return 0;
// }
// return num + sumToN(num - 1)



// let recurse2 = num => num ? num + recurse(num - 1) : num


// console.log(recurse2(3))
// recurse(4);
// recurse(3);
// recurse(2);
// recurse(1);
// recurse(0); return 0;
// 
// const sumToN = (n) => {
// 
//   if (n.length  > 0) {
//     console.log(n.toUpperCase());
//     sumToN(n.slice(1));
//     // console.log('answer:', answer);
//     console.log('1st n:', n);
//     return n;
//   } else {
//     console.log(n.toUpperCase());
//     console.log('2nd n:', n);
//     return n;
//   }
// 
// }
// 
// console.log(sumToN('numberString'));
// 
// // sumToN(6);
// 
// 
//   // return num && num + sumToN(num - 1);
// 
// // function sumToN(num) {
// //   if (num < 0) {
// //     return null;
// //   }
// //   if (num === 0) {
// //     return 0;
// //   }
// //   return num + sumToN(num - 1)
// // }
// 
// // 
// // console.log(sumToN(5));
// // 
// // sumToN(5) // returns 15
// // sumToN(1)  // returns 1
// // sumToN(9)  // returns 45
// // sumToN(-8)  // returns null
// 
// /**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
// try {
//   module.exports = sumToN;
// } catch (e) {
//   module.exports = null;
// }


//   // one-liner: return num && num + sumToN(num - 1);
// 
  // if (num < 0) {
  //   return null;
  // }
  // if (num === 0) {
  //   return 0;
  // }
  // return num + sumToN(num - 1)

// 

// function sumToN(n) {
//   if (n.length  > 0) {
//     console.log(n.toUpperCase());
//     let answer = sumToN(n.slice(1))
//     console.log('answer:');
//     console.log(answer);
//     console.log('1st n:');
//     console.log(n);
//     return n
//   } else {
//     console.log(n.toUpperCase());
//     console.log('2nd n:');
//     console.log(n);
//     return n
//   }
// 
// }
// 
// 
// sumToN('numberString');
