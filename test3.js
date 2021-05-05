// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  const res = [];
  const firstVal = arr2.every((val, i) => val > arr1[i]);
  let secondVal = '';

  for(let i = 0; i < arr2.length; i++){
    if(arr2[i] > arr1[i] === false){
       secondVal = true;
    }
  }

  res.push(firstVal);
  res.push(secondVal);
  return res;
}

console.log(result(arr1, arr2));