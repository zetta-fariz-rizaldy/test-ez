// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  let evenVal = [];
  let oddVal  = Array();
  let result  = Array();
  arr2 = arr2.filter(val =>  !arr1.includes(val));

  for(let i = 0; i < arr2.length; i++) {
    if(arr2[i] % 2 === 0) {
      evenVal.push(arr2[i]);
    } else {
      oddVal.push(arr2[i]);
    }
  }

  oddVal = oddVal.sort((a, b) => b - a);

  arr1.unshift(...oddVal);

  arr1.push(...evenVal);

  return arr1;
}

console.log(result(arr1, arr2));