'use strict';

// класс - своеобразный шаблон того как будут выглядеть создаваемые объекты
// каждый класс может включать в себя столько св-в и методов, сколько потребуется, но хорошей практикой является делать классы под конкретные задачи
class Rectangle {
    width;
    height;

    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    calcArea() {
        return this.width * this.height;
    }

    calcPerimeter() {
        return (this.width + this.height) * 2;
    }
}

// экземпляр класса
const rect = new Rectangle(5, 10);
console.log(rect.calcArea()); // 50
console.log(rect.calcPerimeter()); // 30