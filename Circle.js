/*
    CALCULATE CIRCUMFERENCE OF A CIRCLE
        circumference = diameter*π
    CALCULATE SURFACE AREA OF A CIRCLE
        Area= square_of_radius*π
*/

import {createElement} from 'https://pagoulid.github.io/JS-Mathematical-Shapes/CreateElement.js';

const PI = 3.14;
const RADIUS = 4;
const SHAPE = 'circle';

let calcCircumference = (r)=>{
    let diameter = 2*r;
    return diameter*PI;
}
let calcArea = (r) =>{
    let square_of_radius = r**2;
    return square_of_radius*PI;
}

let circleRadius = RADIUS;
let circumference = calcCircumference(circleRadius);
let area = calcArea(circleRadius);

let resultText = `Circle with radius ${circleRadius} has  ${circumference} circumference and a surface area of ${area} units`;
   
createElement(resultText,SHAPE);