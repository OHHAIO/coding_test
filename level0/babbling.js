/**
 * 옹알이
 * 조카는 "aya", "ye", "woo", "ma" 네가지 발음을 최대 한번씩 사용해 조합한 발음만 가능.
 * 문자열 배열 babbling 이 매게변수로 주어질 떄, 조카가 발음할수 있는 단어 개수를 return 하는 solution 함수 완성
 */
const solution = (babbling) => {
	let count = 0;

	if(babbling && babbling.length > 0) {
		babbling.forEach((item) => {
			if(item.split(/aya|ye|woo|ma/g).join("") === "") {
				count++;
			}
		});
	}

	return count;
}

solution(["aya", "yee", "u", "maa", "wyeoo"]);
