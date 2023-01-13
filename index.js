// const myname = console.log('vinay singh chauhan');
let date = document.querySelector('.date-time');


let clock = function() {
    const now = new Date();
    let hour = `${now.getHours()}`.padStart(2,0);
    let minute = `${now.getMinutes()}`.padStart(2,0);

    let amPm = Number(hour)>12 ? "PM" : "AM";
    let time = `${hour}:${minute} ${amPm}`;

    date.textContent = time;
   
    console.log(time);
}

var t = function(){
    setTimeout(clock,0);
    setInterval(clock, 1000);
    
}
t();
