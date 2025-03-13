const clock = document.getElementById('clock');
//We could have used document.querySelector('#clock') as well

//set interval is to keep running the method after the set time, in this case 1000 ms (1 sec)
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());

  let currTime = date.toLocaleTimeString();
  clock.innerHTML = `${currTime}`;
}, 1000);
