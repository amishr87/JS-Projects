//function to generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;

const startChangingColor = function () {
  const generateColor = function () {
    document.body.style.backgroundColor = randomColor();
  };
  // intervalID = setInterval(generateColor, 1000);
  //Above line would have worked as well but this is better code
  if (intervalID == null) {
    intervalID = setInterval(generateColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null; //This is clean up memory
  document.body.style.backgroundColor = '#212121';
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
