'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP * 12;

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

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.strokeText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
  ctx.strokeText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);

  for (var i = 0; i < players.length; i++) {
    var randomColor = Math.random() * (100 - 0) + 0;
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillText(players[i], (CLOUD_X + GAP * 4) + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP, TEXT_WIDTH);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect((CLOUD_X + GAP * 4) + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP * 3, BAR_WIDTH, ((barHeight * times[i]) / maxTime) * (-1));
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.strokeText(Math.round(times[i]), (CLOUD_X + GAP * 4) + (TEXT_WIDTH + BAR_WIDTH) * i, (CLOUD_HEIGHT - GAP) + ((barHeight * times[i]) / maxTime) * (-1) - GAP * 3, TEXT_WIDTH);

    } else {
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillText(players[i], (CLOUD_X + GAP * 4) + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP, TEXT_WIDTH);
      ctx.fillStyle = 'hsl(240,' + randomColor + '%, 50%)';
      ctx.fillRect((CLOUD_X + GAP * 4) + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP * 3, BAR_WIDTH, ((barHeight * times[i]) / maxTime) * (-1));
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.strokeText(Math.round(times[i]), (CLOUD_X + GAP * 4) + (TEXT_WIDTH + BAR_WIDTH) * i, (CLOUD_HEIGHT - GAP) + ((barHeight * times[i]) / maxTime) * (-1) - GAP * 3, TEXT_WIDTH);

    }
  }
};
