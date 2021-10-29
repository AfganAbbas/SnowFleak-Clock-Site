let time = document.getElementById('time-part');

function CreatesnowFlake() {
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 10 + 10;

    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    }, 4000);
}

function Time() {
    let date = new Date();
    let hour = date.getHours();
    let minut = date.getMinutes();
    let sec = date.getSeconds();
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (sec < 10) {
        sec = '0' + String(sec);
    }
    if (minut < 10) {
        minut = '0' + String(minut);
    }
    time.innerText = hour + ':' + minut + ':' + sec;


}

function UpdateClock() {
    Time();
}
UpdateClock();
setInterval(CreatesnowFlake, 100);
setInterval(UpdateClock, 1000);