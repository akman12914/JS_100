/* -------------------------------------------------------------------------- */
/*                              문제14 : 3의 배수 인가요?                             */
/* -------------------------------------------------------------------------- */

// let n = Math.random();
// console.log(n);

// 1) 0 <= Math.random() < 1, 이건 정해진 룰입니다.

// 0 <= Math.random() < 1	0이상 1미만

// 2) 1)에서 모든 항에 max-min을 곱하면

// 0 <= Math.random()*(max - min) < max - min	0이상 max-min미만

// 3) 2)에서 모든 항에 min을 더하면

// min <= Math.random() * (max - min) + min < max	min이상 max미만

// min이상 max미만의 정수(소수점 없는 수)를 생성할 때에는 Math.floor() 메소드를 활용할 수 있습니다.

// Math.floor(x);
// 주어진 숫자 이하의 정수중에서 가장 큰 수를 반환합니다.

// = 소수점을 날립니다.

// const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

let getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

let input = getRandom(1, 10);
console.log("입력 : " + input);

if (input % 3 == 0 && input != 0) {
  console.log("출력 : 짝");
} else {
  console.log("출력 : " + input);
}
