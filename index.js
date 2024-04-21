'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && num.trim() === num;
};

function one(hiddenNum, attempt) {
  function two() {
    let question = prompt('Угадай число от 1 до 100!');
    let repeatQuestion;
    attempt--;

    if (attempt <= 0) {
      repeatQuestion = confirm('Попытки закончились, хотите сыграть еще?');

      repeatQuestion === false ? alert('Игра окончена') : one(20, 10);
    }

    if (question === null) {
      alert('Игра окончена');
    } else if (!isNumber(question)) {
      alert('Введи число!');

      attempt++;

      two();
    } else if (+question === hiddenNum) {
      repeatQuestion = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

      repeatQuestion === false ? alert('Игра окончена') : one(20, 10);
    } else if (question > hiddenNum) {
      alert(`Загаданное число меньше, осталось попыток ${attempt}`);

      two();
    } else if (question < hiddenNum) {
      alert(`Загаданное число больше, осталось попыток ${attempt}`);

      two();
    }
  }

  two();
}

one(20, 10);
