
const myEvent = document.getElementById("myEvent");
const myEventDate = document.getElementById("myEventDate");
const enteredEvent = document.getElementById("enteredEvent");
const setEventBtn = document.getElementById("setEventBtn");
const setDateBtn = document.getElementById("setDateBtn");
const setEvent = document.getElementById("setEvent");
const control = document.getElementById("control-gear");

myEvent.addEventListener('keyup',(e) => {
    if (e.keyCode === 13) {
    enteredEvent.innerHTML = myEvent.value;
    myEvent.setAttribute("value","New");
  }
});

control.addEventListener('click', () => {
    setEvent.classList.toggle("show");
})

setEventBtn.addEventListener("click", () => {
    enteredEvent.innerHTML = myEvent.value;
    myEvent.setAttribute("value","New");
})

let newYears = "";
setDateBtn.addEventListener("click", () => {
    newYears = myEventDate.value;
})






const countdown = () => {
    if (newYears == "") {  
        return 0;
    } else {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
        const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);
    
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const minutes = (Math.floor(totalSeconds / 60) % 24) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = formatTime(hours);
        document.getElementById("minutes").innerText = formatTime(minutes);
        document.getElementById("seconds").innerText = formatTime(seconds);
        console.log(days, hours, minutes, seconds) 
    }
   
}

// make the format of seconds and minutes less than 10 two digits
const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time; 
}


setInterval(countdown, 1000);
countdown();