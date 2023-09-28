//PREGUNTA 3

//Aplicando childNodes
//Para mostrarlo como un NodeList.


const pregunta3 = document.getElementById("content");

console.log(pregunta3.childNodes);

//Aplicando children
//Para mostrarlo como un HTML Collection.

const pregunta3New = document.getElementById("content");
console.log(pregunta3.children);

//Aplicando first y last child

console.log(pregunta3New.firstChild);
console.log(pregunta3New.lastChild);

//PREGUNTA 4

//1er elemento----------------------------------------

//Creación del elemento
const pregunta4 = document.createElement('content1');
console.log(pregunta4);

//Llenando información del elemento
pregunta4.textContent = 'Soy el primer elemento'

//Añadiendo atributos
pregunta4.classList.add('active');

//Agregándolo al DOM

const pregunta1 = document.getElementById('content1');
pregunta1.appendChild(pregunta4);

//2do elemento--------------------------------------

// Creación del elemento
const pregunta4Second = document.createElement('div');

// Llenando información del elemento
pregunta4Second.textContent = 'Soy el segundo elemento';

// Añadiendo atributo
pregunta4Second.classList.add('active');
pregunta4Second.style.backgroundColor = 'pink';

// Agregando el elemento al DOM
const container = document.getElementById('content1');
container.appendChild(pregunta4Second);

//3er elemento--------------------------------------

// Creación del elemento
const pregunta4Third = document.createElement('h5');

// Llenando información del elemento
pregunta4Third.textContent = 'Soy el tercer elemento';

// Añadiendo atributo
pregunta4Third.classList.add('active');
pregunta4Third.style.color = 'blue';

// Agregando el elemento al DOM
const question4 = document.getElementById('content1');
container.appendChild(pregunta4Third);

//PREGUNTA 5

//Aplicaremos otro ejemplo con el evento click.

const buttonNew1 = document.getElementById('buttonNew1');
//Haremos un click
buttonNew1.addEventListener('click', () => {
    console.log('Hiciste click aquí en ejemplo de evento');
});

//PREGUNTA 6

const button = document.getElementById('buttonNew');
//Haremos un click

button.addEventListener('click', () => {
    console.log('Hiciste click aquí en ejemplo con evento "click"');
});

//PREGUNTA 7

const bodyExercise = document.querySelector('body');

window.addEventListener('scroll', (e) => {
    console.log(e);
});


//PREGUNTA 8-------Class List Toggle-------------------

const createElementWithParams = (classAgain, texto) => {

//Elemento base
const divNew = document.getElementById('colorSobrepuesto');
//Aplicando información
const añadir = document.createElement('div');
añadir.textContent = `${texto}`;
//Aplicaremos atributos
añadir.classList.add(classAgain);
//Agregamos con appenChild.
divNew.appendChild(añadir);

};
document.addEventListener('DOMContentLoaded', createElementWithParams('active', 'Ejemplo de pregunta 8'));


//Cambio de color al texto añadido y al botón.

const colorSobrepuesto = document.getElementById('colorSobrepuesto');
const botton8 = document.getElementById('botton8');

colorSobrepuesto.addEventListener('click', toggleClass);
botton8.addEventListener('click', toggleClass);

function toggleClass () {
    colorSobrepuesto.classList.toggle('colorSobrepuesto')
    botton8.classList.toggle('buttonColor')
};



