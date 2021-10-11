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
console.log(digitalRoot(13212346515353216516516513123165651651651351321354526516523216642161351651))
