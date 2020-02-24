'use strict';
var WIZARD_COUNT = 4;
var TAB_ENTER = 'Enter';
var TAB_ESC = 'Escape';

var showElement = function (element) {
  element.classList.remove('hidden');
};

var hideElement = function (element) {
  element.classList.add('hidden');
};

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content
    .querySelector('.setup-similar-item');

var nameWizard = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameWizard = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorWizard = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorWizard = ['black', 'red', 'blue', 'yellow', 'green'];
var fireBallWizard = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

var setupOpenElem = document.querySelector('.setup-open');
var setupCloseElem = document.querySelector('.setup-close');
var popUpWindow = document.querySelector('.setup');

setupOpenElem.addEventListener('click', function () {
  showElement(popUpWindow);

  setupUserName.addEventListener('focusout', function () {
    document.addEventListener('keydown', keyEsc);
  });

  document.addEventListener('keydown', keyEsc);
});

var keyEsc = function (event) {
  if (event.key === TAB_ESC) {
    hideElement(popUpWindow);
  }
};
setupOpenElem.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  if (evt.key === TAB_ENTER) {
    showElement(popUpWindow);
  }

  setupUserName.addEventListener('focusout', function () {
    document.addEventListener('keydown', keyEsc);
  });

  document.addEventListener('keydown', keyEsc);

});

setupCloseElem.addEventListener('click', function () {
  hideElement(popUpWindow);
});

setupCloseElem.addEventListener('focus', function () {
  setupCloseElem.addEventListener('keydown', function (evt) {
    if (evt.key === TAB_ENTER) {
      hideElement(popUpWindow);
    }
  });
});

var setupUserName = popUpWindow.querySelector('.setup-user-name');

setupUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', keyEsc);
});

var wizadrCoat = popUpWindow.querySelector('.wizard-coat');
var wizardEyes = popUpWindow.querySelector('.wizard-eyes');
var wizardFireBall = popUpWindow.querySelector('.setup-fireball-wrap');

wizadrCoat.addEventListener('click', function () {
  wizadrCoat.style.fill = coatColorWizard[Math.floor(Math.random() * coatColorWizard.length)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = eyesColorWizard[Math.floor(Math.random() * eyesColorWizard.length)];
});

wizardFireBall.addEventListener('click', function () {
  wizardFireBall.style.background = fireBallWizard[Math.floor(Math.random() * fireBallWizard.length)];
});
