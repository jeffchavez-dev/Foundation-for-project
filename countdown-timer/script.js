const newYears = "1 Jan 2023";


const countdown = () => {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date().getTime();

    const seconds = Math.floor((newYearsDate - currentDate) / 1000);

    const hours = Math.floor(seconds / 3600) % 24;

    const days = Math.floor(seconds / 3600 / 24);
    const minutes = (Math.floor(seconds / 60) % 24) % 60;

    document.getElementById("days").innerText = days;


    console.log(days, hours, minutes)
}


setInterval(countdown, 1000);



countdown();