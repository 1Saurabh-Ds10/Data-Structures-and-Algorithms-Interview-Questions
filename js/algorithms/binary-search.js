/*
Binary Search

Time Complexity: O(logn)
Space Complexity: O(1)
*/

function binarySearch(arr, key) {
  
  let l = 0,
      h = arr.length - 1;
  
  while (true) {
    
    let m = l + Math.floor((h - l) / 2);
    let mVal = arr[m];
    
    if (mVal === key) 
      return m;
    else if (key < mVal)
      h = m - 1;
    else if (key >= mVal)
      l = m + 1;
    
    if (l > h)
      return null;
      
  }
  
}


/*
Sample Data:

const arr = [2,5,8,9,23,45,67,89,100];
console.log(binarySearch(arr, 100, 0, arr.length - 1));

*/