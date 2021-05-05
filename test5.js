// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  const binar = num.toString(2)
  const binarArr = binar.split('')
  let countNumber = 0

  for(let i = 0; i<binarArr.length; i++) {
    if(binarArr[i] === '1') {
      countNumber += 1
    }
  }
  return countNumber
}

console.log(result(number));