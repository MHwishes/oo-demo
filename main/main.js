'use strict';
class Shape {
    constructor(name) {
        this.setName(name || '形状');
    }

    getName() { return this._name; }
    setName(name) { this._name = name; }
}

class Square extends Shape {
    constructor(length) {
        super('正方形');
        this.length = length;
    }

    getLength() { return this.length; }
    getPerimeter() { return this.length * 4; }
}

const shape = new Shape('我的形状');

console.log(shape.getName());

const square = new Square(4);
console.log(`名称:${square.getName()}`);
console.log(`边长为:${square.getLength()}`);
console.log(`面积是:${square.getPerimeter()}`);