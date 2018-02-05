/*
Selection Sort
*/

function selectionSort(arr) {
  for (let i = 0, l = arr.length; i < l; i++) {
    let minIndex = i;

    for (let j = i + 1; j < l; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    if (minIndex !== i) {
      let lesser = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}
