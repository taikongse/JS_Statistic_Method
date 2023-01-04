//JavaScript Static Methods

class Square {
  constructor (_widthArea) {
    this._width = _widthArea;
    this._height = _widthArea;
  }
  
  static equals (a, b) {
    return a._width * a._height === b._width * b._height; //is it true?
  }

  static isValidDimensions (width, height) {
    return width === height;
  }
}

// square1: หาความกว้างของสี่เหลี่ยม
let square1 = new Square(9);
// let square2 = new Square(9);


console.log('\JavaScript Static Methods\n==========================')
console.log('\n\หา _widthArea ความกว้างของสี่เหลี่ยม\n=============')
console.log(square1);


// square2: พิสูจน์พื้นที่ square ว่าเท่ากันทั้ง 2 สี่เหลี่ยมหรือไม่?
let square2 = new Square(9);

console.log('\n\พิสูจน์พื้นที่ square ว่า equals เท่ากันทั้ง 2 สี่เหลี่ยมหรือไม่(วิธีที่ 2)\n=============')
console.log(Square.equals(square1, square2));


console.log('\n\พิสูจน์พื้นที่ square ว่า isValidDimensions เท่ากันทั้ง 2 สี่เหลี่ยมหรือไม่\n=============')
console.log(Square.isValidDimensions(6, 6));