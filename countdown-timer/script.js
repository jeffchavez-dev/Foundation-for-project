const newYears = "1 Jan 2023";


const countdown = () => {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date().getTime();
    const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const minutes = (Math.floor(totalSeconds / 60) % 24) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    console.log(days, hours, minutes, seconds)
}


setInterval(countdown, 1000);



countdown();