'use strict';


class Rectangle { 
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;   
    }
}

class ColoredReactangleWithText extends Rectangle{
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

// const square = new Rectangle(10,12);
// const long = new Rectangle(8,8);

// const thatArea = square.calcArea();

// console.log(thatArea);

// console.log(long.calcArea());

const div = new ColoredReactangleWithText(25,10, 'Hello World', 'red');

div.showMyProps();

console.log(div.calcArea());