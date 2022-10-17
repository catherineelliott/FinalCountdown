function getData() {
    let lastDate = new Date(2022, 09, 25, 16, 00, 00, 0);
    let today = new Date();
    let milliSecsLeft = (lastDate - today)/1000;
    let weeksLeft = Math.floor(milliSecsLeft/(604800));
    milliSecsLeft -= weeksLeft * 604800;
    let daysLeft = Math.floor(milliSecsLeft/(86400));
    milliSecsLeft -= daysLeft * 86400;
    let hoursLeft = Math.floor(milliSecsLeft / 3600);
    milliSecsLeft -= hoursLeft * 3600;
    let minutesLeft = Math.floor(milliSecsLeft / 60);
    milliSecsLeft -= minutesLeft * 60;
    let secondsLeft = Math.floor(milliSecsLeft);
    //Working days
    let totalDaysLeft = Math.floor((lastDate - today)/1000/86400);
    let nonWorkingDays = getNonWorkingDays(today,lastDate);
    let workingDays = totalDaysLeft - nonWorkingDays;
    document.getElementById("weeks").innerHTML = weeksLeft;
    document.getElementById("days").innerHTML = daysLeft;
    document.getElementById("hours").innerHTML = hoursLeft;
    document.getElementById("minutes").innerHTML = minutesLeft;
    document.getElementById("seconds").innerHTML = secondsLeft;
    document.getElementById("workingDays").innerHTML = workingDays + " working days!";
}

function getNonWorkingDays(startDate,endDate) { 
    let currDate = startDate;
    let countWeekend = 0;
    let daysLeave = 5;
    while (currDate <= endDate) {
        if (currDate.getDay() === 0 || currDate.getDay() === 6) {
            countWeekend ++;
        };
        currDate.setDate(currDate.getDate() + 1);
    }
    return countWeekend + daysLeave;
}

getData();