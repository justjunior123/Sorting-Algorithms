// The following are a handful of some of the famous sorting algos
// ---------------------------------------------------------------------------->

// *****************************Binary Search***********************************
// 1. Get length of the array
// 2. find the midpoint
// 3. compare if the midpoint is lower or higher than the searched number
// 4. lop off the uneeded side
// 5. go to step one

// Improvements can be instead of using if else statements which are generally
// expensive we can use a switch statement to improve the efficiency.
// Worst Complexity: O(log n)
// Average Complexity: O(log n)
// Best Complexity: O(1)
// Space Complexity: O(1)

const bSearch = ( (array,target) => {

  let length = array.length;
  let mid = Math.floor(length / 2);
  console.log('This is the midpoint of the array',mid);
  let dupedArray = array;
  console.log(dupedArray);
  if (dupedArray.length === 0) return console.log("Not in array!");;

  if (array[mid] > target) {
    dupedArray = array.slice(0,mid);
    return bSearch(dupedArray,target);
  } else if ( array[mid] < target) {
    dupedArray = array.slice( mid + 1, length );
    return bSearch(dupedArray,target);
  } else {
    console.log("This is where the target index is:",dupedArray[mid]);
  }

});

// let array = [1,2,3,4,4];
// bSearch(array,4)


// ---------------------------------------------------------------------------->

// *****************************Bubble Sort*************************************

// 1. Get length of the array
// 2. do while swapped is true, at start swapped is turned false
// 3. for the length of n compare current and next value
// 4. swap values if current is greater than next value
// 5. decrement the size of n and repeat in swapped
// 6. return the answer or duped array

// Worst Complexity: O(n^2)
// Average Complexity: O(n^2)
// Best Complexity: O(n)
// Space Complexity: O(1)

const bubbleSort = ( (array) => {

  let swapp = false;
  let answer = array;
  let n = array.length - 1;
  do {
    swapp = false;

    for (let i = 0; i < n; i++) {
      let j = i + 1;
      let current = array[i];
      let nextElement = array[j];

      if (current > nextElement) {
        array[i] = nextElement;
        array[j] = current;
        swapp = true;
      }

    }

    n--;
  } while (swapp);

  return answer;
});
//
// console.log(bubbleSort(
//   [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// ---------------------------------------------------------------------------->
// **************************** Merge Sort *************************************

const mergeSort = ( (array) => {
  console.log( array );

  let length = array.length;

  if (length < 2) return array;

  let mid = Math.floor(length / 2);
  let left = mergeSort(array.slice(0,mid));
  let right = mergeSort(array.slice(mid));

  return merge( left, right );
})

// 1. Get length of the array
// 2. split the array up into three parts, call the function recursively
// 3. call the merge function and return the sorted left and right sides

// ******************************** Sorting Function ***************************

// 4.
// 5.
// 6.

// Worst complexity: n*log(n)
// Average complexity: n*log(n)
// Best complexity: n*log(n)
// Space complexity: n

const merge = ( (left,right) => {
  let result = [];

  while ( left.length > 0 && right.length > 0) {
    result.push( left[0] < right[0] ? left.shift() : right.shift() );
  }

  return result.concat( left.length ? left : right );
})

let array = [2,5,2,3,6,8,2,2,9];
console.log(mergeSort(array));

// ---------------------------------------------------------------------------->
// **************************** Quick Sort *************************************

// 1. Find the base case for each recursive call on the array.
// 2. Instantiate the three variables that we will use for pivots and concatination
// 3.

// Worst complexity: O(n^2))
// Average complexity: O(n*log(n))
// Best complexity: n*log(n)
// Space complexity: O(log(n))

const quickSort = ( (array) => {
  if ( array.length < 2 ) return array;

  let pivot = array[0];
  let lesser = [];
  let greater = [];

  for (var i = 1; i < array.length; i++) {
    if ( array[i] < pivot) {
      lesser.push( array[i] )
    } else {
      greater.push( array[i] )
    }

  }

  return quickSort(lesser).concat(pivot,quickSort(greater));
});

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
console.log( quickSort(array));
