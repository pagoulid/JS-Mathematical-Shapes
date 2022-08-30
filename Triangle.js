import {createElement} from 'https://pagoulid.github.io/JS-Mathematical-Shapes/CreateElement.js';

    const TR_SIDE = [5,6,7];
    const SHAPE = 'triangle';
    let triangleSides = TR_SIDE;


    let calcArea = (sides) =>{
        const sumSides = sides.reduce((prevVal,currVal)=>prevVal+currVal,0);
        console.log(sumSides);
    }

    calcArea(triangleSides);