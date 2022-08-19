const newYears = "10 June 2023";


const countdown = () => {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const minutes = (Math.floor(totalSeconds / 60) % 24) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
    console.log(days, hours, minutes, seconds)
}

// make the format of seconds and minutes less than 10 two digits
const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time; 
}


setInterval(countdown, 1000);


countdown();