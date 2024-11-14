/* -------------------------------------------------------------------------- */
/*                                                         */
/* -------------------------------------------------------------------------- 문제48: 대소문자 바꿔서 출력하기*/

let string = prompt("알파벳을 입력해주세요.");
let arr = string.split("");

// console.log(arr[1].charCodeAt());
arr.forEach((element, i) => {
  if (element.charCodeAt() <= 90) {
    arr[i] = element.toLowerCase();
  } else {
    arr[i] = element.toUpperCase();
  }
  console.log(element);
});

console.log(arr);
