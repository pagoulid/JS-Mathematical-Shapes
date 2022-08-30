export function squareElement(squareText,id){
    let squareItem = document.getElementById(id);
    let squarePelement = document.createElement('p');
    let squareTextNode = document.createTextNode(squareText);

    squarePelement.appendChild(squareTextNode);
    squareItem.appendChild(squarePelement);
    

}