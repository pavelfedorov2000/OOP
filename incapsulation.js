'use strict';

// Инкапсуляция
// Суть: сам класс = своего рода капсула, которая содержит св-ва и методы для работы с этими свойствами
// Рядом всегда идет сокрытие

// Сокрытие - private (закрытая от внешнего кода часть) <=> public

class Rectangle {
    private _width;
    private _height;

    constructor(w, h) {
        this._width = w;
        this._height = h;
    }

    // геттер
    public get width() {
        return this._width;
    }

    // сеттер
    public set width(value) {
        if (value <= 0) {
            this._width = 1;
        } else {
            this._width = value;
        }
    }

    calcArea() {
        return this._width * this._height;
    }

    calcPerimeter() {
        return (this._width + this._height) * 2;
    }
}

// экземпляр класса
const rect = new Rectangle(5, 10);
//console.log(rect.calcArea()); // 50
//console.log(rect.calcPerimeter()); // 30



class User {
    private username;
    private password;
    private _id;

    constructor(username, password) {
        this.username = username; // получаем извне 
        this.password = password; // получаем извне
        this._id = generateRandomId();
    }

    get username() {
        return this.username;
    }

    set username(value) {
        this.username = value;
    }

    get password() {
        return this.password;
    }

    set password(value) {
        this.password = value;
    }

    // id можем только получать (тк скрытое свойство)
    get id() {
        return this._id;
    }
}

const user = new User('Pavel', 'Fedorov');
user.id = 5; // Error


class Database {
    private _url;
    private _port;
    private _username;
    private _password;

    constructor(url, port, username, password) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = [];
    }

    // менять table можем только с помощью специального созданного ниже метода, который для этого предназначен
    public createNewTable(table) {
        this._tables.push(table);
    }

    public clearTables() {
        this._tables = [];
    }

    get url() {
        return this._url;
    }

    get port() {
        return this._port;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }
}

const db = new Database(1, 2, 3, 4);
db.tables = []; // Error
db.createNewTable({ name: 'roles' });
db.createNewTable({ name: 'users' });
db.clearTables();