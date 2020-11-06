var car = document.querySelector('img');

var carData = {
  direction: {},
  position: {},
  moving: false
};

var carSpeed = 15;
car.style.left = '0';
car.style.top = '0';

var timerID = null;
var isMoving = false;

function handleKeyDown(event) {
  if (event.code !== 'ArrowDown' && event.code !== 'ArrowUp' && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight' && event.code !== 'Space') {
    return;
  }

  if (event.code === 'ArrowDown') {
    car.className = 'car transition down move';
    carData.direction = 'south';

  } else if (event.code === 'ArrowUp') {
    car.className = 'car transition up move';
    carData.direction = 'north';

  } else if (event.code === 'ArrowLeft') {
    car.className = 'car transition left move';
    carData.direction = 'west';

  } else if (event.code === 'ArrowRight') {
    car.className = 'car transition right move';
    carData.direction = 'east';
  }

  if (event.code === 'Space') {
    if (!isMoving) {
      isMoving = true;
      timerID = setInterval(moveCar, 160);
      carData.moving = isMoving;
    } else {
      isMoving = false;
      clearInterval(timerID);
      carData.moving = isMoving;
    }
  }

}
window.addEventListener('keydown', handleKeyDown);

function moveCar() {
  car.style.left = parseInt(car.style.left) + carSpeed + 'px';

  carData.position.locationX = car.style.left;
  carData.position.locationY = car.style.top;
}
