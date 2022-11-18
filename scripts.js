// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function () {

    const buttonTakeoff = document.getElementById('takeoff');
    const buttonLanding = document.getElementById('landing');
    const buttonAbort = document.getElementById('missionAbort');
    const buttonUp = document.getElementById('up');
    const buttonDown = document.getElementById('down');
    const buttonRight = document.getElementById('right');
    const buttonLeft = document.getElementById('left');

    const statusFlight = document.getElementById('flightStatus');
    const heightShuttle = document.getElementById('spaceShuttleHeight');
    const backgroundShuttle = document.getElementById('shuttleBackground');
    const shuttleImg = document.getElementById('rocket');

    buttonTakeoff.addEventListener('click', function () {
        let confirmLaunch = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (confirmLaunch) {
            statusFlight.innerHTML = 'Shuttle in flight.';
            backgroundShuttle.style.backgroundColor = 'blue';
            heightShuttle.innerHTML = add10K(Number(heightShuttle.innerHTML));
        };
    });

    buttonLanding.addEventListener('click', function () {
        window.alert('The shuttle is landing. Landing gear engaged.');
        statusFlight.innerHTML = 'The shuttle has landed.';
        backgroundShuttle.style.backgroundColor = 'green';
        heightShuttle.innerHTML = 0;
    });

    buttonAbort.addEventListener('click', function () {
        let confirmAbort = window.confirm('Confirm that you want to abort the mission.');
        if (confirmAbort) {
            statusFlight.innerHTML = 'Mission aborted.';
            backgroundShuttle.style.backgroundColor = 'green';
            heightShuttle.innerHTML = 0;
        }
    });

    buttonUp.addEventListener('click', function () {
        if (statusFlight.innerHTML === 'Shuttle in flight.') {
            heightShuttle.innerHTML = add10K(Number(heightShuttle.innerHTML));

        }
        shuttleImg.style.marginBottom = 0;
    });

    buttonDown.addEventListener('click', function () {
        if (statusFlight.innerHTML === "Shuttle in flight." && Number(heightShuttle.innerHTML) > 0) {
            heightShuttle.innerHTML = remove10K(Number(heightShuttle.innerHTML));
        }
    });

    buttonLeft.addEventListener('click', function () {

    });

    buttonRight.addEventListener('click', function () {

    });



    function add10K(num) {
        return num + 10000
    }
    function remove10K(num) {
        return num - 10000
    }

})