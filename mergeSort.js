function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let leftArr = arr.slice(0, arr.length / 2);
  let rightArr = arr.slice(arr.length / 2);

  function merge(leftArr, rightArr) {
    let sortArr = [];
    do {
      if (leftArr[0] < rightArr[0]) {
        sortArr.push(leftArr.shift());
      } else {
        sortArr.push(rightArr.shift());
      }
    } while (leftArr.length > 0 && rightArr.length > 0);
    sortArr = sortArr.concat(leftArr, rightArr);
    return sortArr;
  }

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
