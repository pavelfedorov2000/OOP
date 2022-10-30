'use strict';

// Полиморфизм ("много форм") - на нем основано множество паттернов проектирования
// 2 вида:
// параметрический (истинный)
// ad-hoc (мнимый)

// Много форм, но работаем с ними по сути одинаково!
// Переопределение методов у экземпляров класса

// Все приницпы ООП связаны и без того же наследования полиморфизм не был бы возможен

// 1. add-hoc
// один метод работает с двумя типами данных
// это происходит за перегрузки методов
// также мнимым полиморфизмом считается приведение типов (явно дочерний класс преобразовываем к родительскому)
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    add(a: String, b: string): string {
        return a + b;
    }
}

add(5, 5); // 10
add("5", "5"); // "55"

// 2. Параметрический
class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName, lastName, age) {
        this._firstName = firstName; // получаем извне 
        this._lastName = lastName; // получаем извне
        this._age = age;
    }

    public greeting() {
        console.log(`Я человек и меня зовут ${this._firstName}`);
    }

    public getFullName() {
        return `Фамилия - ${this._lastName} Имя - ${this._firstName}`;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            this._age = 0;
        } else {
            this._age = value;
        }
    }
}

// наследуемся от Person
class Employee extends Person {
    private inn;
    private number;
    private snills;

    constructor(firstName, lastName, age, inn, number, snills) {
        super(firstName, lastName, age); // в первую очередь будет вызван родительский конструктор
        this.inn = inn;
        this.number = number;
        this.snills = snills;
    }

    // переопределяем метод родительского класса
    greeting() {
        console.log(`Привет я работник и меня зовут ${this._firstName}`);
    }
}

class Developer extends Employee {
    private level;
    private language;

    constructor(firstName, lastName, age, inn, number, snills, level, language) {
        super(firstName, lastName, age, inn, number, snills); // в первую очередь будет вызван родительский конструктор
        this.level = level;
        this.language = language;
    }

    // переопределяем метод родительского класса
    greeting() {
        console.log(`Привет я разработчик и меня зовут ${this._firstName}`);
    }
}

const pavelFedorov = new Developer("Pavel", "Fedorov", 22, 15, 15, 15, "Junior", "JavaScript");
const employee = new Employee("Employee", "TV", 23);
const person = new Employee("Person", "Tv", 15);

const personList: Person[] = [pavelFedorov, employee, person];

function massGreeting(persons: Person[]) {
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        person.greeting();
    }
}

massGreeting(personList);