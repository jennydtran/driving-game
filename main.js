var car = document.querySelector('img');

var carData = {
  direction: 'east',
  position: {
    locationX: 0,
    locationY: 0
  },
  moving: false
};

var carSpeedEastSouth = 25;
var carSpeedWestNorth = -25;
car.style.left = '0';
car.style.top = '0';

var timerID = null;

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
    if (!carData.moving) {
      carData.moving = true;
      timerID = setInterval(moveCar, 160);
    } else {
      carData.moving = false;
      clearInterval(timerID);
    }
  }

}
window.addEventListener('keydown', handleKeyDown);

function moveCar() {

  if (carData.direction === 'east') {
    car.style.left = parseInt(car.style.left) + carSpeedEastSouth + 'px';
  } else if (carData.direction === 'south') {
    car.style.top = parseInt(car.style.top) + carSpeedEastSouth + 'px';
  } else if (carData.direction === 'west') {
    car.style.left = parseInt(car.style.left) + carSpeedWestNorth + 'px';
  } else if (carData.direction === 'north') {
    car.style.top = parseInt(car.style.top) + carSpeedWestNorth + 'px';
  }

  carData.position.locationX = car.style.left;
  carData.position.locationY = car.style.top;
}
