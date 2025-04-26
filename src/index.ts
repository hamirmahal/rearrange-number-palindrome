function canBeRearrangedIntoAPalindrome(x: number) {
	let num_odd_frequencies = 0;
	let the_number_of_nonzero_digits = 0;
	const digitToCount = new Array(10).fill(0);

	for (const digit of `${x}`) {
		if (Number(digit)) {
			the_number_of_nonzero_digits += 1;
		}
		digitToCount[Number(digit)] += 1;
	}

	for (const freq of digitToCount) {
		if (freq & 1) {
			num_odd_frequencies += 1;
		}
	}

	if (num_odd_frequencies > 1 || the_number_of_nonzero_digits <= 1) {
		return false;
	}
	return true;
}

function theFirstDivisibleNumberGreaterThan(min: number, k: number) {
	const remainder = min % k;
	return remainder ? min + k - remainder : min;
}

function theSmallestPositiveNumberWithNDigits(n: number) {
	return 10 ** (n - 1);
}


if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;

	it(`gets ${theFirstDivisibleNumberGreaterThan.name}`, () => {
		expect(theFirstDivisibleNumberGreaterThan(10, 6)).toBe(12);
		expect(theFirstDivisibleNumberGreaterThan(12, 6)).toBe(12);
		expect(theFirstDivisibleNumberGreaterThan(14, 6)).toBe(18);
	});

	it(`gets ${theSmallestPositiveNumberWithNDigits.name}`, () => {
		expect(theSmallestPositiveNumberWithNDigits(1)).toBe(1);
		expect(theSmallestPositiveNumberWithNDigits(3)).toBe(100);
		expect(theSmallestPositiveNumberWithNDigits(10)).toBe(1_000_000_000);
	});

	it(`checks if a number ${canBeRearrangedIntoAPalindrome.name}`, () => {
		expect(canBeRearrangedIntoAPalindrome(4)).toBe(false);
		expect(canBeRearrangedIntoAPalindrome(8)).toBe(false);
		expect(canBeRearrangedIntoAPalindrome(12)).toBe(false);
		expect(canBeRearrangedIntoAPalindrome(100)).toBe(false);
		expect(canBeRearrangedIntoAPalindrome(101)).toBe(true);
		expect(canBeRearrangedIntoAPalindrome(110)).toBe(true);
		expect(canBeRearrangedIntoAPalindrome(123)).toBe(false);
		expect(canBeRearrangedIntoAPalindrome(515)).toBe(true);
		expect(canBeRearrangedIntoAPalindrome(525)).toBe(true);
		expect(canBeRearrangedIntoAPalindrome(551)).toBe(true);
		expect(canBeRearrangedIntoAPalindrome(1000)).toBe(false);
		expect(canBeRearrangedIntoAPalindrome(1001)).toBe(true);
		expect(canBeRearrangedIntoAPalindrome(1010)).toBe(true);
		expect(canBeRearrangedIntoAPalindrome(2000)).toBe(false);
		expect(canBeRearrangedIntoAPalindrome(2020)).toBe(true);
		expect(canBeRearrangedIntoAPalindrome(3000)).toBe(false);
		expect(canBeRearrangedIntoAPalindrome(10001)).toBe(true);
		expect(canBeRearrangedIntoAPalindrome(100000000)).toBe(false);
		expect(canBeRearrangedIntoAPalindrome(100000001)).toBe(true);
		expect(canBeRearrangedIntoAPalindrome(1000000000)).toBe(false);
		expect(canBeRearrangedIntoAPalindrome(1000000001)).toBe(true);
	});
}
