let pounds = document.querySelector('.pounds');
let kilograms = document.querySelector('.kilograms');
let grams = document.querySelector('.grams');
let ounces = document.querySelector('.ounces');
const form = document.querySelector('form');

const convertWeights = (e) => {
  if (e.target.classList.contains('pounds')) {
    let x = e.target.value;
    kilograms.value = (x / 2.2046).toFixed(2);
    grams.value = (x * 453.592).toFixed(2);
    ounces.value = (x * 16).toFixed(2);
  }

  if (e.target.classList.contains('kilograms')) {
    let x = e.target.value;
    pounds.value = (x * 2.2046).toFixed(2);
    grams.value = (x * 1000).toFixed(2);
    ounces.value = (x * 35.274).toFixed(2);
  }

  if (e.target.classList.contains('grams')) {
    let x = e.target.value;
    pounds.value = (x / 454).toFixed(2);
    kilograms.value = (x / 1000).toFixed(2);
    ounces.value = (x * 0.035274).toFixed(2);
  }

  if (e.target.classList.contains('ounces')) {
    let x = e.target.value;
    pounds.value = (x / 16).toFixed(2);
    kilograms.value = (x / 35.274).toFixed(2);
    grams.value = (x / 0.035274).toFixed(2);
  }
};

form.addEventListener('input', convertWeights);
