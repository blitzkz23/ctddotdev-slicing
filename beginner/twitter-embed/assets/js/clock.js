function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var ampm = hours >= 12 ? 'PM': 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12

    // Add leading zeros to minutes if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Get the month and day
    // Get the month and day
    var month = currentTime.toLocaleString('default', { month: 'short' });
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();

    // Construct the time string
    var timeString = hours + ':' + minutes + ' ' + ampm + ' - ' + month + ' ' + day + ', ' + year;

    // Update the clock ele,emt
    document.getElementById('clock').textContent = timeString;
}

// Call function
updateClock();

// Update every second
setInterval(updateClock, 1000)

