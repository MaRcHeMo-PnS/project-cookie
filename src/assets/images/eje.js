function fibo(max) {
	const plus = [];
	let sum = 0;
	for (let i = 0; sum < max; i++) {
		sum += i;
		plus.push(sum);
	}
	return plus;
}

console.log(fibo(10));
