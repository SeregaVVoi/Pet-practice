window.onload = () => {
   document.body.append(input, btn, div)
}

const input = document.createElement("input"),
   div = document.createElement("div"),
   btn = document.createElement("button");
btn.innerText = 'Зберегти номер телефону';
input.placeholder = '+380-000-00-00';
div.innerText = 'Невірно введенний номер, спробуйте ще';

div.id = "error";

const pattern = /\+?([0-9]{3})\)?[-]([0-9]{3})?[-]([0-9]{2})?[-]([0-9]{2})/;

btn.onclick = function () {
   document.getElementById("error").style.visibility = "hidden";
   if (pattern.test(input.value)) {
      document.location.href = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg"
   } else {
      document.getElementById("error").style.visibility = "visible";
   }
}


const defaultClass = "stopwatch-display ";

let count = 0;

let date = new Date(0, 0, 0)
const timer = () => {
   date = new Date(date.getTime() + 1000)
   const formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
   document.getElementById("value").innerText = formattedDate;
}

const start = () => {
   document.getElementById("stopwatch").className = defaultClass + "start"
   count = setInterval(timer, 1000)
   document.getElementById("start").setAttribute("disabled", "disabled")
   document.getElementById("stop").removeAttribute("disabled")
   document.getElementById("reset").removeAttribute("disabled")
}
const stoptime = () => {
   document.getElementById("stopwatch").className = defaultClass + "stop"
   clearInterval(count)
   timer()
   document.getElementById("stop").setAttribute("disabled", "disabled")
   document.getElementById("start").removeAttribute("disabled")
   document.getElementById("reset").removeAttribute("disabled")
}
const reset = () => {
   document.getElementById("stopwatch").className = defaultClass + "reset"
   date = new Date(0, 0, 0);
   document.getElementById("value").innerText = 'Begin your stopwatch'
   document.getElementById("reset").setAttribute("disabled", "disabled")
   document.getElementById("start").removeAttribute("disabled")
   document.getElementById("stop").removeAttribute("disabled")
}

document.getElementById("start").onclick = start;
document.getElementById("stop").onclick = stoptime;
document.getElementById("reset").onclick = reset;




