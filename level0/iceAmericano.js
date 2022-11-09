/**
 * 아이스 아메리카노.
 * 아이스 아메리카노 가격은 한잔에 5,500;
 * money 매개면수로 주어질떄 최대로 마실수 있는 아메리카노 잔수와 남는돈을 return 하는 함수 작성
 * */

const solution = (money) => {
	const priceOfIceAmericano = 5500;
	let resultArray = [];
	if (money && typeof money === "number") {
		const countOfCoffee = Math.floor(money / priceOfIceAmericano);
		const change = money % priceOfIceAmericano;

		resultArray = [countOfCoffee, change];

		return resultArray;
	}
}

solution(15000);