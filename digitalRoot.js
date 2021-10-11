/*


Write a method, digitalRoot(num). It should sum the digits of a positive integer.
If it is greater than or equal to 10, sum the digits of the resulting number.
Keep repeating until there is only one digit in the result, called the "digital root".
Do not use string conversion within your method.


13 -> 4
59 -> 14 -> 5
132 -> 6

PseudoCode:
	function(num)
		if num < 10:
			return num;

		num = addNums(num)
		while num > 10:
			num = addNums(num)
		return num;


	addNums(num)
		if num > 10:
			return addNums(num // 10) + (num % 10)
		return num;

*/



function digitalRoot(num) {
	if (num < 10) {
		return num;
	}

	num = addNums(num);
	while (num >= 10) {
		num = addNums(num);
	}
	return num;
}

function addNums(num) {
	if (num >= 10) {
		return addNums(Math.floor(num / 10)) + (num % 10);
	}
	return num;
}


console.log(digitalRoot(13))
console.log(digitalRoot(59))
console.log(digitalRoot(132))
