/*Visualize script results on HTML document*/ 
export function createElement(shapeText,id){
    let shapeItem = document.getElementById(id);
    let shapePelement = document.createElement('p');
    let shapeTextNode = document.createTextNode(shapeText);

    let Pstyles ={
        "color":"blue",
        "font-size":"1rem"
    }
    shapePelement.appendChild(shapeTextNode);

    Object.assign(shapePelement.style,Pstyles);
    shapeItem.appendChild(shapePelement);
    

}