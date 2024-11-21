/* -------------------------------------------------------------------------- */
/*                              문제50 : 버블정렬 구현하기                              */
/* -------------------------------------------------------------------------- */

function bubble(arr) {
  let result = arr.slice();
  console.log(result);

  for (let i = 0; i < result.length - 1; i++) {
    console.log("i:" + i);
    for (let j = 0; j < result.length - 1 - i; j++) {
      console.log(`result[${j}]` + result[j]);
      console.log(`result[${j + 1}]:` + result[j + 1]);

      if (result[j] > result[j + 1]) {
        let i = 0;
        i = result[j];
        result[j] = result[j + 1];
        result[j + 1] = i;
      }

      console.log(`result[${j}]` + result[j]);
      console.log(`result[${j + 1}]:` + result[j + 1]);

      console.log("-------------");
    }
  }
  return result;
}

const items = prompt("입력해주세요.")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

console.log(bubble(items));
