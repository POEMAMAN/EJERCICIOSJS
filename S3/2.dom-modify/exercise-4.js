let body = document.querySelector("body");
let newP = document.createElement("p");
let pContent = document.createTextNode('Soy dinámico')
newP.appendChild(pContent);
body.appendChild(newP);