/*
  Bubble Sort
*/

function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0, l = arr.length; i < l; i++) {
    for (let j = 0; j < l - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}
