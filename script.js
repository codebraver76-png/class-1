// script.js
let counter = 0;
let intervalId;// declear intervalid



function counterFunction(){
  counter++;
  document.getElementById("counter").textContent = counter;
}


function startCounter() {
  intervalId = SetInterval(counterFunction,1000);//add sec 
  document.getElementById("start").innerHTML=counter
}

function stopCounter() {
  clearInterval(intervalId);//clear interval 
}