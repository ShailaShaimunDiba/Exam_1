
// let clock = document.querySelector(".clock");
// function showTime() {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     clock.innerHTML = `${hours}: ${minutes}: ${seconds}`;
// }

// setInterval(showTime, 1000);


function showDateTime() {
    let date = new Date();

    // Time Show    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm = hours >= 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = `<span class="time">${hours}:${minutes}:${seconds} ${am_pm}</span><br>`;
    //  Date Show
    let current_date = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDay();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let currentMonth = months[month];
    let currentDay = days[day];
    let currentDate = `<span class= "date">${currentDay},${current_date},${currentMonth},${year}</span>`;


    let dateTime = document.querySelector(".date_time");
    dateTime.innerHTML = time + currentDate;

}

showDateTime();
setInterval(showDateTime, 1000);


// Submit Button JS
function confirmSubmission() {
    return confirm("Are you sure you want to submit?");
}