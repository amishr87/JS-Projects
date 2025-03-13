const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //this is to stop the event from performing any default action if there is any. This is a precautionary method

  const height = parseInt(document.querySelector('#height').value); //this is to change the value of height from the string datatype to int datatype
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (
    (height === '' || height <= 0 || isNaN(height)) &&
    (weight === '' || weight <= 0 || isNaN(weight))
  ) {
    results.innerHTML = `Please enter a valid Height and Weight: ${height}, ${weight}`;
  } else if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid Height: ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid Weight: ${weight}`;
  } else {
    //dividing by 10000 since the height entered is in cm and not m, toFixed(2) is to limit the number of decimal digits to 2
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `${bmi}`;
  }
});
