function mergeSort(arr) {
  let leftArr = arr.slice(0, arr.length / 2);
  let rightArr = arr.slice(arr.length / 2);
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

console.log(mergeSort([2, 1, 3, 5, 8, 10]));
