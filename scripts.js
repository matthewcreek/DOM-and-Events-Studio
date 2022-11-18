// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){

const buttonTakeoff = document.getElementById('takeoff');
const buttonLanding = document.getElementById('landing');
const buttonAbort = document.getElementById('missionAbort');

const statusFlight = document.getElementById('flightStatus');
const heightShuttle = document.getElementById('spaceShuttleHeight');
const backgroundShuttle = document.getElementById('shuttleBackground');

buttonTakeoff.addEventListener('click', function(){
    let confirmLaunch = window.confirm('Confirm that the shuttle is ready for takeoff.');
    if (confirmLaunch){
        statusFlight.innerHTML = 'Shuttle in flight.';
        backgroundShuttle.style.backgroundColor = 'blue';
        heightShuttle.innerHTML = add10K(Number(heightShuttle.innerHTML));
    }
})

















function add10K(num){
   return num + 10000
}

})