function fibs(n) {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      arr[i] = 0;
      continue;
    } else if (i === 1) {
      arr[i] = 1;
      continue;
    }
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
console.log(fibsRec(8));

function fibsRec(n) {
  console.log("This was printed recursively");
  let arr = [];
  if (n === 1) {
    arr.push(0);
    return arr;
  } else if (n === 2) {
    arr.push(0, 1);
    return arr;
  } else {
    arr = fibsRec(n - 1);
    const length = arr.length
    arr.push(arr[length - 1] + arr[length - 2]);
    return arr;
  }
}

// bad old function
function oldFibsRec(n) {
  console.log("This was printed recursively");
  let arr = [];
  if (n === 1) {
    arr.push(0);
    return arr;
  } else if (n === 2) {
    arr.push(0, 1);
    return arr;
  } else {
    arr = fibsRec(n - 1);
    arr.push(fibsRec(n - 1).pop() + fibsRec(n - 2).pop());
    return arr;
  }
}
