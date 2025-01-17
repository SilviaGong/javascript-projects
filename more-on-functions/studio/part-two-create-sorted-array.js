//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


function getMininum(numsArray) {
  let min = numsArray[0];
  for (let i = 1; i < numsArray.length; i++) {
    if (numsArray[i] < min) {
      min = numsArray[i];
      // minIndex = i;
    }
  }
  return min;
}

//Sort each array in ascending order.
function getAscending(arr) {
  let sortedArray = [];
  while (arr.length > 0) {
    let min = getMininum(arr);   //Get the value of minimum
    let minIndex = arr.indexOf(min); //Get the index of minimum value
    sortedArray.push(min);
    arr.splice(minIndex, 1);
  }
  return sortedArray;
}

//Sort each array in decending order.
function getDescending(arr) {
  let sortedArray = getAscending(arr); // Use the existing getAscending function
  return sortedArray.reverse(); // Reverse the sorted array
}

// console.log(getAscending(nums2));
console.log(getDescending(nums2));