'use strict';

class Shape {
    constructor(name) {
        this.setName(name || '形状');
    }

    getName() { return this._name; }
    setName(name) { this._name = name; }
}

var shape = new Shape('我的形状');
console.log(shape.getName()); // '我的形状'