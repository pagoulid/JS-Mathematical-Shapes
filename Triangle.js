/*
    CALCULATION OF TRIANGLE AREA

        s = 0.5*(sum of sides)
        A = sqrt(s*(s-a)*(s-b)*(s-c))

*/ 

import {createElement} from 'https://pagoulid.github.io/JS-Mathematical-Shapes/CreateElement.js';

    const TR_SIDE = [5,6,7];
    const SHAPE = 'triangle';
    let triangleSides = TR_SIDE;


    let calcArea = (sides) =>{
        const sumSides = sides.reduce((prevVal,currVal)=>prevVal+currVal,0);
        let s = sumSides*0.5;
        
            /*Init prevVal to 1.Calc (s-a)*(s-b)*(s-c) and mul with s after*/ 
        const middleCalc = sides.reduce((prevVal,currVal)=>prevVal*(s-currVal),1);
        
        return Math.sqrt(s*middleCalc);

        
    }

    let Area = calcArea(triangleSides);
    let resultText = `Area of Triangle with given sides ${triangleSides[0]}, ${triangleSides[1]}, ${triangleSides[2]}   is ${Area}`;
   
    createElement(resultText,SHAPE);