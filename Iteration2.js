/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */
let newDiv = document.createElement("div")

document.body.insertBefore(newDiv, document.querySelector("h2"))

/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */
let newDiv2 = document.createElement("div")
newDiv2.appendChild(document.createElement("p"))

document.body.insertBefore(newDiv2, document.querySelector("h2"))

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */
let newDiv3 = document.createElement("div")
for (let i = 0; i < 6; i++) {
    newDiv3.appendChild(document.createElement("p"));
}

document.querySelectorAll("div")[1].insertAdjacentElement('afterend', newDiv3)

/* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */
let newP = document.createElement("p")
let text = document.createTextNode("Soy dinámico!")
newP.appendChild(text)

document.body.insertBefore(newP, document.querySelector("h2"))

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
let texto2 = document.createTextNode("Wubba Lubba dub dub")

document.querySelector("h2.fn-insert-here").appendChild(texto2)

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ul = document.createElement("ul")
for (const social of apps) {
    let mediaName = document.createTextNode(social);
    ul.appendChild(mediaName)
}

document.body.insertBefore(ul, document.querySelector("h2"))

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
for (elem of document.querySelectorAll(".fn-remove-me")) {
    elem.remove()
}

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */
let newP2 = document.createElement("p")
let text2 = document.createTextNode("Voy en medio!")
newP2.appendChild(text2)
let target = document.querySelector("div.fn-insert-here")

target.insertAdjacentElement("afterend", newP2)


/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */
for (div of document.querySelectorAll("div.fn-insert-here")) {
    console.log(div, newP2);
    let thisP = document.createElement("p")
    thisP.appendChild(document.createTextNode("Voy dentro!"))
    div.appendChild(thisP)
}