let numberMax = 10;
let sommaNumb = 0;

for (let i = 1; i <= numberMax; i++) {

    sommaNumb += i;

}

let mediaFinale = sommaNumb / numberMax;

let writeSomma = document.querySelector('.somma-numb');
let writeMedia = document.querySelector('.media-numb');

writeSomma.innerHTML = `La somma dei primi 10 numeri è: ${sommaNumb}`;
writeMedia.innerHTML = `La media dei primi 10 numeri è: ${mediaFinale}`;