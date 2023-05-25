
// Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
// rate (ставка за день роботи), days (кількість відпрацьованих днів).
// Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
// Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.
// const user = new Object();
// user.name = 'Higo';
// user.surname = 'Gygo';
// this.rate = 20.89;
// this.days = 25;
// user.getSalary = function() {
//    alert(this.rate * this.days)
// }

// console.dir(user)

//  Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
// який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
// який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
// та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.

// class SomeString {
//       reverse(str){
//          return str.split('').reverse()
//       }
//       ucFirst(str){
//          const first = str.charAt(0).toUpperCase()
//          const second = str.slice(1)
//          return first + second;
//       }
//       ucWords(str){
//       const words = str.split(' ');
//       const wordU = words.map( (w) => {
//          return this.ucFirst(w)
//       })
//       return wordU.join(' ');
//       }
//     }
// const myString = new SomeString()
// console.log(myString.reverse('Sereerer'));
// console.log(myString.ucFirst('ferguson'));
// console.log(myString.ucWords('home cant not'))

// Створіть функцію-конструктор, яка створюватиме об'єкт Human (людина). Створіть масив об'єктів та реалізуйте функцію, яка сортуватиме елементи масиву за значенням властивості
// вік за зростанням або за спаданням.

// function Human(name, surname, age){ 
//    return {
//       name,
//       surname,
//       age
//    }
// }
// function sortByAge(people, type) {
//    const defaultSort = people.sort((p1, p2) => {
//       return p1.age > p2.age ? 1 : -1
//     });


//   console.log({ defaultSort });
  
//    if(type === 'DESC'){
//       return defaultSort.reverse()
//    }
//    return defaultSort

// }
// const people = [
//    Human('Serhii','Voilov', 28),
//    Human('Denis','myhopadov', 26),
//    Human('Nikita','Bezygliy', 30),
//    Human('Vitalii','Sokolov', 28),
// ]

// console.log("desc", sortByAge(people,'DESC'))
// console.log("asc", sortByAge(people, 'ASC'))

// Створіть функцію-конструктор, яка буде створювати об'єкт Human (людина), додайте на власний розсуд властивості та методи в цей об'єкт. 
// Подумайте, які методи та властивості слід створити рівня екземпляра, а які рівня функції-конструктора.

class Human{
   constructor(name, surname, age, sex){
      this.person = {
         name,
         surname,
         age,
         sex
      }
   }
   get info () {
      return this.person
   }
   set changeLocal(city){
       this.person = {...this.person, city}
   }
}
const me = new Human('Serhii', 'Voilov', 28, 'male')
console.log(me.info)
me.changeLocal = 'Kharkiv'
console.log(me.info)