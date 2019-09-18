'use strict';

var showSetupModal = function () {
  var setupModal = document.querySelector('.setup');
  setupModal.classList.remove('hidden');
};

var getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

var generateData = function () {
  var generatedArray = [];
  var numberOfWizards = 4;
  var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  for (var i = 0; i < numberOfWizards; i++) {
    var randomWizard = {};
    randomWizard.name = wizardNames[getRandomInt(wizardNames.length)] + ' ' + wizardSurnames[getRandomInt(wizardSurnames.length)];
    randomWizard.coatColor = coatColors[getRandomInt(coatColors.length)];
    randomWizard.eyesColor = eyesColors[getRandomInt(eyesColors.length)];
    generatedArray.push(randomWizard);
  }

  return generatedArray;
};

var createWizardElements = function () {
  var wizards = generateData();
  var wizardElements = [];
  var wizardTemplate = document.querySelector('#similar-wizard-template');

  for (var i = 0; i < wizards.length; i++) {
    var wizardTemplateClone = document.importNode(wizardTemplate.content, true);
    wizardTemplateClone.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardTemplateClone.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardTemplateClone.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    wizardElements.push(wizardTemplateClone);
  }

  return wizardElements;
};

var renderWizardElements = function (wizardElementsArray) {
  var wizardsList = document.querySelector('.setup-similar-list');
  var wizardsFragment = document.createDocumentFragment();
  for (var i = 0; i < wizardElementsArray.length; i++) {
    wizardsFragment.appendChild(wizardElementsArray[i]);
  }
  wizardsList.appendChild(wizardsFragment);
};

var showSimilarList = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

showSetupModal();
renderWizardElements(createWizardElements());
showSimilarList();
