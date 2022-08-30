/*Visualize script results on HTML document*/ 
export function createElement(Text,id){
    let shapeItem = document.getElementById(id);
    let shapePelement = document.createElement('p');
    let shapeTextNode = document.createTextNode(shapeText);

    shapePelement.appendChild(shapeTextNode);
    shapeItem.appendChild(shapePelement);
    

}