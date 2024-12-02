/* -------------------------------------------------------------------------- */
/*                                문제54 : 연속되는 수                               */
/* -------------------------------------------------------------------------- */

const arr = prompt("숫자 5개를 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

function sort(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let i = 0;
        i = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = i;
      }
    }
  }

  return arr;
}

function sequenceCheck(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return "NO";
    }
  }
  return "YES";
}

const sortArr = sort(arr);

console.log(sequenceCheck(sortArr));
