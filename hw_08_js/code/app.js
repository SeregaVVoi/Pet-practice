// Створити клас Car , Engine та Driver.
// Клас Driver містить поля - ПІБ, стаж водіння.
// Клас Engine містить поля – потужність, виробник.
// Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. 
// Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". 
// А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

// Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
// Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
// https://storage.googleapis.com/www.examclouds.com/oop/car-ierarchy.png

class Driver {
   constructor(name, surname, ageexpiens){
      this.person = {
         name,
         surname,
         ageexpiens
      }
   }
   
}
class Engine {
   constructor(power, producer){
      this.vechile = {
         power,
         producer
      }
   }
}
class Car  {
   constructor(brand, classtype, weight, ){
      this.auto = {
         brand,
         classtype,
         weight,
      }
   }
   start(){
      return 'Поїхали'
   }
   stop(){
      return 'Зупиняємося'
   }
   turnRight(){
      return 'Поворот праворуч'
   }
   turnLeft(){
      return 'Поворот ліворуч'
   }
   toString(){
      return {...driver, ...eng, ...this.auto}
   }
}
const driver = new Driver('Serhii', 'Voilov', 5)
const eng = new Engine(400, 'Audi')
const me = new Car('Audi', 'S-Class', 6500)
console.log(me.start())
console.log(me.stop())
console.log(me.turnRight())
console.dir(me.turnLeft())
console.log(me.toString())

class Lorry  extends Car{
   constructor(carrying, brand, classtype, weight ){
      super(brand, classtype, weight)
      this.auto = {
         carrying,
         brand,
         classtype,
         weight
      }
   }
}
const lorry = new Lorry(20000, 'Audi', 'S-Class', 6500)
console.dir(lorry)
class SportCar extends Car{
   constructor(speed, brand, classtype, weight ){
      super(brand, classtype, weight)
      this.auto= {
         speed,
         brand, 
         classtype, 
         weight
      }
   }
}
const sport = new SportCar( 320, 20000, 'Audi', 'S-Class', 6500)
console.dir(sport)