let elForm = document.querySelector('.js-form');
let elSelect = elForm.querySelector('.js-select');
let elNonOutput = elForm.querySelector('.js-non-output');
let elKattaligi = elForm.querySelector('.js-kattaligi');
let elKattaligiOutput = elForm.querySelector('.js-kattaligi-output');
let elUstigaOutput = elForm.querySelector('.js-ustiga');
let elToppingOutput = elForm.querySelector('.js-toppinng-output');
let elPizzaToppingElementsList = elForm.querySelector('.js-ustiga-list');


//type of bread
let typeOfBread = ['Yupqa', 'Qalin', 'Buxanka'];
//size of pizza
let pizzaSize = [25, 30, 35];
//extra foods 
let pizzaTopping = ['Pomidor', 'Kurka goshti', 'Qoziqorin', 'zaytun', 'Qazi'];

let pizzaToppingOrder = [];

for( let i = 0; i < typeOfBread.length; i++ ) {
  let elOption = document.createElement('option');
  elOption.value = typeOfBread[i];
  elOption.textContent = typeOfBread[i]
  elSelect.appendChild(elOption);
  
  elSelect.addEventListener('change', function(){
    elNonOutput.innerHTML = this.value
  });
}

for( let i = 0; i < pizzaSize.length; i++ ) {

  let radioLabel = document.createElement('label');
  radioLabel.classList.add('radio-label', 'mr-3');
  let radioInput = document.createElement('input');
  radioInput.classList.add('sr-only', 'radio-input');
  radioInput.type = 'radio';
  radioInput.name = 'radio';
  radioInput.value = pizzaSize[i];
  let radioSpan = document.createElement('span');
  radioSpan.classList.add('radio-btn');
  radioSpan.textContent = `${pizzaSize[i]} cm`;

  radioLabel.appendChild(radioInput);
  radioLabel.appendChild(radioSpan)

  elKattaligi.appendChild(radioLabel)

  radioInput.addEventListener('change', function() {
    elKattaligiOutput.textContent = `${this.value}`
  });
}

for( let i = 0; i < pizzaTopping.length; i++ ) {
  
  let elCheckboxLabel = document.createElement('label');
  elCheckboxLabel.classList.add('d-flex', 'align-items-center', 'w-50', 'mb-4');
  let elCheckboxTopping = document.createElement('input');
  elCheckboxTopping.name = pizzaTopping[i];
  elCheckboxTopping.value = pizzaTopping[i];
  elCheckboxTopping.type = 'checkbox';
  elCheckboxTopping.classList.add('checkbox-input', 'sr-only');
  let elCheckboxBig = document.createElement('span');
  elCheckboxBig.classList.add('checkbox-big');
  let elCheckboxController = document.createElement('span');
  elCheckboxController.classList.add('checkbox-controller');
  elCheckboxController.textContent = pizzaTopping[i];

  elCheckboxLabel.appendChild(elCheckboxTopping);
  elCheckboxLabel.appendChild(elCheckboxBig);
  elCheckboxLabel.appendChild(elCheckboxController);

  elUstigaOutput.appendChild(elCheckboxLabel);

  elCheckboxTopping.addEventListener('click', function() {

    if(pizzaToppingOrder.includes(this.name)) {
      let itemIndex = pizzaToppingOrder.indexOf(this.name);
      pizzaToppingOrder.splice(itemIndex, 1);
    } else {
      pizzaToppingOrder.push(this.name)
    }

    elPizzaToppingElementsList.innerHTML = '';

    for( let i = 0; i < pizzaToppingOrder.length; i++) {

      let toppingItem = document.createElement('li');
      toppingItem.textContent = pizzaToppingOrder[i];
      elPizzaToppingElementsList.appendChild(toppingItem);
    }

  });

}


