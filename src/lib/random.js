export function getRandomLessThan(x) {
	return Math.floor((Math.random() * 1000) % x);
}

export function getUniqueRandomsLessThan(x, num) {
	const nums = [getRandomLessThan(x)];
	while (nums.length < num) {
		const rand = getRandomLessThan(x);
		if (nums.indexOf(rand) < 0) nums.push(rand);
	}
	return nums;
}
