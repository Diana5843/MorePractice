// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)
function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  alert( sum(+prompt('add number')) );



// // Реализовать с использованием классов. Для каждого поля создать get и set с проверкой типов.
// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.

// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
// 2.4 Реализовать функцию выводит на экран всю информацию о студенте
class Student{
    constructor(name, surname, isMale, contacts){
        this.name = name;
        this.surname = surname;
        this.isMale = isMale;
        this.contacts = contacts;
        this._info = null;
    }
    get name(){
        return this._name;
    }

    set name(newName){
        this.validateType(newName, 'string');
        this._name = newName;
    }

    get surname(){
        return this._surname;
    }
    set surname(newSurname){
        this.validateType(newSurname, 'string');
        this._surname = newSurname;
    }
    get isMale(){
        return this._isMale;
    }
    set isMale(newIsMale){
        this.validateType(newIsMale, 'boolean');
        this._isMale = newIsMale;
    }
    get contacts(){
        return this._contacts;
    }
    set contacts(newContacts){
        this.validateType(newContacts, 'string');
        this._contacts = newContacts;
    }
    _validateType(value, type){
        if(typeof(value) !== type){
            throw new TypeError();
        }
    }

    FacultyInfo(info){
        if(!(info instanceof Faculty)){
            throw new TypeError();
        }
        this._info = info;
    }
    toInfoStudent(){
        return `name: ${this.name} surname: ${this.surname} gender: ${this.isMale} cont: ${this.contacts}`;
    }  
}

class Faculty{
    constructor(facultyStudent, deportament){
        this.facultyStudent = facultyStudent;
        this.deportament = deportament;
    }
    get facultyStudent(){
        return this._facultyStudent;
    }

    set facultyStudent(newFacultyStudent){
        this.validateType(newFacultyStudent, 'string');
        this._facultyStudent = newFacultyStudent;
    }
    get deportament(){
        return this._deportament;
    }

    set deportament(newDeportament){
        this.validateType(newDeportament, 'string');
        this._deportament = newDeportament;
    }
    _validateType(value, type){
        if(typeof(value) !== type){
            throw new TypeError();
        }
    }
    toStringFaculty(){
        return `faculty: ${this.facultyStudent} deportament: ${this.deportament}`
    }

}

const student1 = new Student('bob', 'smith', true, 'dfghjk')
const faculty = new Faculty('biology', 'biology')
student1.toInfoStudent();
student1.toStringFaculty(faculty);


// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел
// 3.2 Вывести элементы с четными индексами
// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
// 3.5 Подсчитать количество нулевых элементов


function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}

const arr = randomArray(24, 100);
console.log(arr);

const even = [];
for(var i = 0; i<arr.length; i++){
    arr[i] % 2;
}
console.log(even);

console.log('Вывести элементы с четными индексами:');
arr.forEach((item, index) =>{
    if (index % 2 ===0){
        console.log(item);
    }
});
console.log('Вывести только четные элементы (четные числа делятся на 2 без остатка):');
arr.forEach((item, index) =>{
    if (item % 2 === 0){
        console.log(index);
    }
});

console.log('Вывести индексы нулевых элементов (элемент равен нулю):');
arr.forEach((item, index) =>{
    if (item === 0){
        console.log(index);
    }
});

console.log('Подсчитать количество нулевых элементов:');
const numberCounter = (number, arr) => arr.reduce((acc, nextNumber) =>{
    nextNumber === number ? acc++ : acc;
    return acc;
}, 0);
const count = numberCounter (0, arr);
console.log(count);


// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
// 4.1 Для каждого поля создать get и set с проверкой типов.

class Book{
    /**
     * 
     * @param {string} autor 
     * @param {string} name 
     * @param {number} year 
     * @param {string} edition 
     */
    constructor(autor, name, year, edition){
        this.autor = autor;
        this.name = name;
        this.year = year;
        this.edition = edition;
    }
    get autor(){
        return this._autor;
    }

    set autor(newAutor){
        this.validateType(newAutor, 'string');
        this._autor = newAutor;
    }
    get name(){
        return this._name;
    }

    set name(newName){
        this.validateType(newName, 'string');
        this._name= newName;
    }
    get year(){
        return this._year;
    }

    set year(newYear){
        this.validateType(newYear, 'string');
        this._year = newYear;
    }
    get edition(){
        return this._edition;
    }

    set edition(newEdition){
        this.validateType(newEdition, 'string');
        this._edition = newEdition;
    }

    _validateType(value, type){
        if(typeof(value) !== type){
            throw new TypeError();
        }
    }
    
}

class electronicBook extends Book{
    /**
     * 
     * @param {string} autor 
     * @param {string} name 
     * @param {number} year 
     * @param {string} edition 
     * @param {string} form 
     * @param {number} electronicNumber 
     */
    constructor(autor, name, year, edition, form, electronicNumber){
        super(autor, name, year, edition);
        this.form = form;
        this.electronicNumber = electronicNumber;
    }


    get form(){
        return this._form;
    }

    set form(newForm){
        this.validateType(newForm, 'string');
        this._form = newForm;
    }
    get electronicNumber(){
        return this._electronicNumber;
    }

    set electronicNumber(newElectronicNumber){
        this.validateType(newElectronicNumber, 'string');
        this._electronicNumber = newElectronicNumber;
    }

    _validateType(value, type){
        if(typeof(value) !== type){
            throw new TypeError();
        }
    }
}

const book1 = new Book('Брэдбери, Рэй', '451 градус по Фаренгейту', 1953, 'Ballantine Books');
console.log(book);
const electronicBook = new electronicBook ('Брэдбери, Рэй', '451 градус по Фаренгейту', 1953, 'Ballantine Books', 'pdf', 567890);
console.log(electronicBook);

// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

function addNumber(n){
    for(let i =1; i <= n; i ++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz');
        }
        else if ( i % 3 === 0){
            console.log('fizz')
        }
        else if (i % 5 === 0){
            console.log('buzz')
        }
        else{
            console.log(i);
        }
    }
}

const number1 = addNumber(10);
console.log(number1);
