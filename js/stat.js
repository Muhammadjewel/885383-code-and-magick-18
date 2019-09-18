'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_GAP = 50;
var COLUMN_START_POINT = 90;
var X_START_POINT = 150;
var NAMES_Y = 250;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 0, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', X_START_POINT, 20);
  ctx.fillText('Список результатов:', X_START_POINT, 40);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var dataHorizontalStartPosition = X_START_POINT + (COLUMN_WIDTH + COLUMN_GAP) * i;
    var barHeight = COLUMN_HEIGHT * times[i] / maxTime;
    var barTopPoint = COLUMN_START_POINT + COLUMN_HEIGHT - barHeight;
    var barFillSaturation = Math.round(Math.random() * 100);
    var barFillColor = 'hsl(240, ' + barFillSaturation + '%, 50%)';

    // Display times
    ctx.fillText(Math.round(times[i]), dataHorizontalStartPosition, barTopPoint - 20);

    // Display bars
    ctx.fillStyle = barFillColor;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(dataHorizontalStartPosition, barTopPoint, COLUMN_WIDTH, barHeight);

    // Display names
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], dataHorizontalStartPosition, NAMES_Y);
  }
};
