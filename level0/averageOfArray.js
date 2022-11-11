/**
 * 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
 */
const solution = (numbers) => {
	let answer = 0;

	numbers.forEach(number => answer += number);

	return answer / numbers.length;
}