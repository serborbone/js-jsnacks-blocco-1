let number = parseInt(prompt('Fino a quale numero vuoi calcolare il cubo?'));

let result;
let innerNumber = document.querySelector('.cubo-numeri');

let i = 1;

for (; i < number; i++) {

    result = Math.pow(i, 3);
    innerNumber.innerHTML +=  `<li> ${result} </li>`;

}

