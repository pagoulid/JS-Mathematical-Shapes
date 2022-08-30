/*_of_square : refers to a feature of the square shape itself*/ 
/*square_of_ : refers to the mathematical operation x^2 , where x is number*/
const SQ_SIDE = 9;

let calcDiag_of_square = (side) =>{

    let square_of_side = side**2;
   
    return  Math.sqrt(square_of_side+square_of_side);

}

let side_of_square = SQ_SIDE;
let diagonal_of_square = calcDiag_of_square(side_of_square);

console.log(`Diagonal of square with side length ${side_of_square} is ${diagonal_of_square}`);