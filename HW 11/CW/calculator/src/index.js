const calculate = {
   a: "",
   sign: "",
   b: "",
   rez: "",
   mem: ""
}
mrcFlag = false
document.querySelector('[value="."]').disabled = false;
document.querySelector(".keys").addEventListener("click", (e) => {
   console.log(e.target.value);
   console.log(calculate);
   if (validate(/\d/, e.target.value) && calculate.a === "" && calculate.sign === "" && calculate.b === "") {
      calculate.a += e.target.value
      show(calculate.a)
   } else if (validate(/\d/, e.target.value) && calculate.sign === "" && calculate.b === "") {
      calculate.a += e.target.value
      show(calculate.a)
   }
   if (calculate.a !== "" && validate(/^[.]$/, e.target.value) && calculate.rez == "" && calculate.b == "") {
      calculate.a += "."
      show(calculate.a)
   }
   if (calculate.a !== "" && validate(/^[.]$/, e.target.value) && calculate.rez == "" && calculate.b !== "") {
      calculate.b += "."
      show(calculate.b)
   }
   if (String(calculate.a).includes(".") && calculate.rez == "" && calculate.sign == "") {
      document.querySelector('[value="."]').disabled = true;
   } else if (calculate.rez == "" && calculate.sign !== "") {
      document.querySelector('[value="."]').disabled = false;
   }
   if (String(calculate.b).includes(".") && calculate.rez == "") {
      document.querySelector('[value="."]').disabled = true;
   } else if (calculate.rez !== "") {
      document.querySelector('[value="."]').disabled = false;
   }

   if (validate(/^(?!\.$)([+-/*])$/, e.target.value)) {
      calculate.sign = e.target.value
   }
   if (validate(/\d/, e.target.value) && calculate.a !== "" && calculate.sign !== "") {
      calculate.b += e.target.value;
      show(calculate.b);
      document.querySelector('[value="="]').disabled = false;
      if (validate(/\m+/, e.target.value)) {
         calculate.mem = calculate.rez
      }
   }

   if (validate(/^(?!\.$)([+-/*=])$/, e.target.value) && calculate.a !== "" && calculate.b !== "") {
      switch (calculate.sign) {
         case '+':
            calculate.rez = +calculate.a + +calculate.b;
            break;
         case '-':
            calculate.rez = +calculate.a - +calculate.b;
            break;
         case '/':
            calculate.rez = +calculate.a / +calculate.b;
            break;
         case '*':
            calculate.rez = +calculate.a * +calculate.b;
            break;
         default:
            console.log('Invalid');
            break;
      }
      console.log(calculate.rez)
      show(calculate.rez)
      calculate.a = calculate.rez
      calculate.sign = ""
      calculate.b = ""
   }

   if (validate(/\C/, e.target.value)) {
      show('0')
      calculate.a = ""
      calculate.b = ""
      calculate.sign = ""
      calculate.rez = ""
      calculate.mem = ""
   }
   if (validate(/^\m\+$/, e.target.value) || validate(/^\m\-$/, e.target.value)) {
      document.querySelector('.memory').classList.remove('inactive')
      calculate.mem = display.value
   }
   const mrc = document.querySelector('[value="mrc"]');

   console.log(mrcFlag)
   if (validate(/^mrc$/, e.target.value) && mrcFlag == false && calculate.mem !== "") {
      calculate.a = calculate.mem
      calculate.sign = ""
      calculate.b = ""
      show(calculate.mem)
      mrcFlag = true
   } else if (validate(/^mrc$/, e.target.value) && mrcFlag == true) {
      calculate.mem = ""
      calculate.a = ""
      show("")
      document.querySelector('.memory').classList.add('inactive')
      mrcFlag = true
   }
})

const display = document.querySelector('.display input')
function show(v) {
   display.value = v
}


const validate = (r, v) => r.test(v)





























// if (calculate.rez !== "") {
//    calculate.operand1 = calculate.rez;
// }
// if (validate(/\d/, e.target.value) && calculate.operand1 !== "" && calculate.sign !== "") {
//    calculate.operand2 += e.target.value;
//    show(calculate.operand2)
//    document.querySelector('[value="="]').disabled = false;
// } else if (validate(/^\d$/, e.target.value)) {
//    calculate.operand1 += e.target.value;
//    show(calculate.operand1)
// } else if (validate(/^(?!\.$)([+-/*])$/, e.target.value)) {
//    calculate.sign = e.target.value;
// } else if (validate(/^=$/, e.target.value) && calculate.operand1 !== "" && calculate.operand2 !== "") {
//    switch (calculate.sign) {
//       case '+':
//          calculate.rez = +calculate.operand1 + +calculate.operand2;
//          break;
//       case '-':
//          calculate.rez = +calculate.operand1 - +calculate.operand2;
//          break;
//       case '/':
//          calculate.rez = +calculate.operand1 / +calculate.operand2;
//          break;
//       case '*':
//          calculate.rez = +calculate.operand1 * +calculate.operand2;
//          break;
//       default:
//          console.log('Invalid');
//          break;
//    }
//    show(calculate.rez)
// } else if (validate(/\C/, e.target.value)) {
//    show('0')
//    calculate.operand1 = ""
//    calculate.operand2 = ""
//    calculate.sign = ""
//    calculate.rez = ""
// }
// console.log(calculate)