//1차 답안

// function areaOfCircle(radius) {
//   return radius * radius * 3.14;
// }

// let radius = prompt("반지름의 길이 정수 n을 입력하세요");
// console.log("원의 넓이 : " + areaOfCircle(radius));

//답안 확인 후 수정

function areaOfCircle(radius) {
  const result = radius * radius * 3.14;
  return result;
}

let radius = prompt("반지름의 길이 정수 n을 입력하세요");
console.log("원의 넓이 : " + areaOfCircle(radius));

// 원의 넓이를 구하는 식은 변할 일이 없으니 const 변수 선언이 적절해보인다.
