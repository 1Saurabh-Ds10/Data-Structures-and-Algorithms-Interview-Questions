/*
Binry Search

Time Complexity: O(logn)
Space Complexity: O(logn)
*/

function binarySearch(arr, key, l, h) {
  
  if (l > h) 
    return null;
  
  
  let m = l + Math.floor((h - l) / 2);
  
  let midVal = arr[m];
  
  if (midVal === key) 
    return m;
  else if (key < midVal) 
    return binarySearch(arr, key, l, m - 1)
  else if (key >= midVal) 
    return binarySearch(arr, key, m + 1, h);
  
    
}


/*
Sample Data:

const arr = [2,5,8,9,23,45,67,89,100];
console.log(binarySearch(arr, 100, 0, arr.length - 1));

*/