let numbers = prompt("입력 :");
let reverseNumbers = [];
let result;
for (i = numbers.length - 1; i >= 0; i--) {
  reverseNumbers.push(numbers[i]);
}

console.log("출력 :", ...reverseNumbers);
