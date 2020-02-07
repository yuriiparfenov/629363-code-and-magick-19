'use strict';
var WIZARD_COUNT = 4;

var showElement = function (classElement) {
  var block = document.querySelector(classElement);
  block.classList.remove('hidden');
};

showElement('.setup');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content
    .querySelector('.setup-similar-item');

var nameWizard = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameWizard = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorWizard = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorWizard = ['black', 'red', 'blue', 'yellow', 'green'];

var createArrayWizard = function (arrName, arrSurname, arrCoatColor, arrEyesColor) {
  var arrayWizard = [];

  for (var i = 0; i < WIZARD_COUNT; i++) {
    arrayWizard[i] = {
      name: arrName[Math.floor(Math.random() * arrName.length)] + ' ' + arrSurname[Math.floor(Math.random() * arrSurname.length)],
      coatColor: arrCoatColor[Math.floor(Math.random() * arrCoatColor.length)],
      eyesColor: arrEyesColor[Math.floor(Math.random() * arrEyesColor.length)]
    };
  }

  return arrayWizard;
};

var arrayOfWizards = createArrayWizard(nameWizard, surnameWizard, coatColorWizard, eyesColorWizard);

var getWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function (element, arrayWizard) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < arrayWizard.length; i++) {
    fragment.appendChild(getWizard(arrayWizard[i]));
  }

  element.appendChild(fragment);
};

renderWizards(similarListElement, arrayOfWizards);
showElement('.setup-similar');

