/*
Створити об'єкт "Документ", де визначити властивості "Заголовок, тіло, футер, дата". 
Створити об'єкт вкладений об'єкт - "Додаток". Створити об'єкт "Додаток", вкладені об'єкти, 
"Заголовок, тіло, футер, дата". Створити методи для заповнення та відображення документа.
*/

const doc = {
 title: '',
 body: '',
 footer: '',
 date: '',
 app: {
   title: '',
   body: '',
   footer: '',
   date: '',
 },
   add: function(){
     this.title = prompt("Write Title");
     this.body = prompt("Write body");
     this.footer = prompt("Write footer");
     this.date = prompt("Write date");
   },
   show: function () {
      document.write("<p>Title: " + this.title);
      document.write("<p>Body: " + this.body);
      document.write("<p>Footer: " + this.footer);
      document.write("<p>Date: " + this.date);
   }
}
doc.add();
doc.show();