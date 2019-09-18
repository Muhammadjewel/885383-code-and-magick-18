'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 0, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 150, 20);
  ctx.fillText('Список результатов:', 150, 40);

  ctx.fillStyle = 'red';
  ctx.fillRect(150, 70, 40, 150);
};
