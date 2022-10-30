'use strict';

// Наследование (extends)
// Человек --> Работник --> Разработчик
// constructor по умолчанию наследуется!

class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName, lastName, age) {
        this._firstName = firstName; // получаем извне 
        this._lastName = lastName; // получаем извне
        this._age = age;
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
}

const employee1 = new Employee("Pavel", "Fedorov", 22, 15, 15, 15);

class Developer extends Employee {
    private level;
    private language;

    constructor(firstName, lastName, age, inn, number, snills, level, language) {
        super(firstName, lastName, age, inn, number, snills); // в первую очередь будет вызван родительский конструктор
        this.level = level;
        this.language = language;
    }
}

const pavelFedorov = new Developer("Pavel", "Fedorov", 22, 15, 15, 15, "Junior", "JavaScript");
console.log(pavelFedorov.getFullName()); // геттер доступен и для классов, наследуемых от родительского