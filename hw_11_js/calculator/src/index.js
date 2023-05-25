const calculate = {
	operand1: "",
	sign: "",
	operand2: "",
	result: "",
	mem: ""
};


const validate = (r, v) => r.test(v);

const display = document.querySelector(".display input");
function show(v) {
	display.value = v;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach(n => {
	n.addEventListener("click", (e) => {
		if (validate(/\d/, e.target.value)) {
			if (calculate.sign) {
				calculate.operand2 += e.target.value;
				show(calculate.operand2);
			} else  {
				calculate.operand1 += e.target.value;
				show(calculate.operand1);
			}
		}
	});

});

const operations = document.querySelectorAll(".sign");
operations.forEach(o => {
	o.addEventListener("click", (e) => {
		if (validate(/^(?!\.$)([+-/*]$)/, e.target.value) && !!calculate.operand1) {
			calculate.sign = e.target.value;
			show(calculate.sign);
		}
	});
});

document.querySelector(".result").addEventListener("click", () => {
	let result = 0;
	switch (calculate.sign) {
		case '+':
			result = Number(calculate.operand1) + Number(calculate.operand2);
			break;
		case '-':
			result = Number(calculate.operand1) - Number(calculate.operand2);
			break;
		case '*':
			result = Number(calculate.operand1) * Number(calculate.operand2);
			break;
		case '/':
			result = Number(calculate.operand1) / Number(calculate.operand2);
			break;
		default:
			result = Number(calculate.operand1);
	}
	calculate.result = result;
	show(result);
	if(calculate.result){
		calculate.operand2 = ""
		calculate.operand1 = calculate.result
		calculate.sign = ""
	}
});

document.querySelector(".reset").addEventListener("click", (e) => {
	if (!!calculate.operand1 || !!calculate.operand2, e.target.value) {
		let del = 0;
		Number(calculate.operand1 = ""),
			calculate.sign = "",
			Number(calculate.operand2 = ""),
			Number(calculate.mem = ""),
			Number(calculate.result = "")
		show(del)
	}
});

const mplus = document.querySelector(".mplus").addEventListener("click", () => {
	document.querySelector("span").classList.add("visible")
	if (calculate.mem = display.value) {
		Number(calculate.mem + calculate.result)
	} else if (calculate.mem = display.value) {
		Number(calculate.mem + calculate.operand2)
	} else {
		Number(calculate.mem + calculate.operand1)
	}
});



document.querySelector(".m-").addEventListener("click", () => {
	document.querySelector("span").classList.remove("visible")
	if (calculate.mem = calculate.operand1) {
		Number(calculate.mem -= calculate.operand1)
	console.log(calculate)
	} else if (calculate.mem = calculate.operand2) {
		Number(calculate.mem -= calculate.operand2)
		console.log(calculate)
	} else {
		Number(calculate.mem -= calculate.result)
		console.log(calculate)
	}
});


document.querySelector(".mrc").addEventListener("click", () => {
	let count = 0;
	document.querySelector("span").classList.add("visible")
	for (let i = 3; count < i; count++) {
		show(calculate.mem)
		console.log(count)
		if (count >= 2) {
			document.querySelector("span").classList.remove("visible")
			calculate.mem = ""
			console.log(count)
		}
	}
	console.log(count)
});

// https://regexr.com/
