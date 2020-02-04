'use strict';
var setupBlock = document.querySelector('.setup');

setupBlock.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content
    .querySelector('.setup-similar-item');

var nameWizard = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameWizard = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorWizard = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorWizard = ['black', 'red', 'blue', 'yellow', 'green'];

var renderArrayWizard = function (arrName, arrSurname, arrCoatColor, arrEyesColor) {
  var arrayWizard = [];

  var randomValue = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var randomName = function (arr1, arr2) {
    return arr1[Math.floor(Math.random() * arr1.length)] + ' ' + arr2[Math.floor(Math.random() * arr2.length)];
  };

  for (var i = 0; i < 4; i++) {
    arrayWizard[i] = {
      name: randomName(arrName, arrSurname),
      coatColor: randomValue(arrCoatColor),
      eyesColor: randomValue(arrEyesColor)
    };
  }

  return arrayWizard;
};

var arrayOfWizards = renderArrayWizard(nameWizard, surnameWizard, coatColorWizard, eyesColorWizard);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < arrayOfWizards.length; i++) {
  fragment.appendChild(renderWizard(arrayOfWizards[i]));
}

similarListElement.appendChild(fragment);
setupBlock.querySelector('.setup-similar').classList.remove('hidden');
