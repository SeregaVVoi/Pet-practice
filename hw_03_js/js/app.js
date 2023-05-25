// Використовуючи циклічні конструкції, пробіли &nbsp;,  зірочки * намалюйте 
// Порожній прямокутник, трикутник та ромб

// 1
//  Якщо змінна a дорівнює 10, то виведіть 'Вірно', інакше виведіть 'Неправильно'.
// let a = parseInt( prompt("Number"));
// if(a === 10){
//    console.log('True')
// } else {
//    console.log('false')
// }


// 2
// Змінна num може приймати 4 значення: 1, 2, 3 або 4. Якщо вона має значення '1',
// то змінну result запишемо 'зима', якщо має значення '2' – 'весна' тощо.
// Розв'яжіть завдання через switch-case.

// let result
//  const num = prompt('What season?');
// switch (num) {
//    case "1": result = 'winter';
//     //  console.log("winter");
//      break;
//    case "2": result = 'spring';
//     //  console.log("spring");
//      break;
//    case "3": result = 'summer';
//     //  console.log("summer");
//      break;
//    case "4": result = 'autumn';
//     //  console.log("autumn");
//      break;
//    default:
//      console.log(`Sorry, its not a season + ${num}`);
//  }
// alert(result)

// 3
// У змінній min лежить число від 0 до 59. Визначте, в яку чверть години потрапляє це число
// (У першу, другу, третю або четверту).
// let min = parseInt( prompt("Number"))
// if (min <= 15){
//   alert('first')
// }else if( min <= 30){
//   alert('second')
// }else if( min <= 45){
//   alert('third')
// } else if( min <= 59) {
//   alert('fourth')
// }

// 4
// Використовуючи циклічні конструкції, пробіли &nbsp;,  зірочки * намалюйте 
// Порожній прямокутник, трикутник та ромб

for (let i = 0; i <= 4; i++) {
   document.write("*")
}
document.write('<br>')
for (let i = 0; i <= 1; i++) {
   document.write("*")
   for (let i = 0; i <= 5; i++) {
      document.write("&nbsp;")
   }
   for (let i = 0; i < 1; i++) {
      document.write("*")
   }
   document.write('<br>')
}
for (let i = 0; i <= 4; i++) {
   document.write("*")
}

document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

const w = 11; // ширина
const h = 6; // висота
let spaces = w; // відступ равний ширині
let str = "";

for (i = h; i > 0; i--) { // від висоти при одній єтирації від висоти віднімаеться -1 
   let str = ""; // пуста строка
   for (j = i; j <= w; j++) { // збільшуе J на плюс один, а спочтаку j рівен i
      if (i === 1) { // якщо .i. дорівнюе === 1 то тру, якщо ні то ідемо далі
         str += "*";
      } else if (j === w || j === spaces) {
         str += "*";
      } else {
         str += "&nbsp&nbsp"; // двойний пробіл
      }
   }
   spaces -= 2;
   document.write(str + "<br/>");
}

document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
for (let c = 0; c < 1; c++) {
   for (let a = 0; a <= 10; a++) { // 0, 1, 2
      for (let i = a; i <= 10; i++) { // 
         document.write("&nbsp;");
      }
      for (let s = a + 1; s > 0; s--) {
         document.write("*")
      }
      document.write("<br>") 
   }
}
for (let c = 0; c < 1; c++) {
   for (let a = 10; a >= 0; a--) {
      for (let i = 0 + a; i <= 10; i++) {
         document.write("&nbsp;");
      }
      for (let s = a + 1; s > 0; s--) {
         document.write("*")
      }
      document.write("<br>")
   }
}