
let result = 0;

for (let i = 0; i < 10; i++) {

  let numbRequest = parseInt(prompt('Inserisci un numero'));
  result += numbRequest;

}

let scriviSomma = document.querySelector('.somma-numeri');
scriviSomma.innerHTML = 'La somma dei numeri inseriti è: ' + result;
