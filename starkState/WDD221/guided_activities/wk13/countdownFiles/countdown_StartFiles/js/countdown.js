"use strict";
$(document).ready(function() {
    $("#countdown").click(function() {
        let event = $("#event").val();
        let dt = $("#date").val();
        let message = $("#message");
        
        // Make sure task and due date are entered
        if (event.length === 0 || dt.length === 0) {
            message.text("Please enter both a name and a date.");
            return;
        }
        
        // Validate date format
        if (!/\d{2}\/\d{2}\/\d{4}/.test(dt)) {
            message.text("Please enter the date in MM/DD/YYYY format.");
            return;
        }
        
        let date = new Date(dt);
        
        // Check for valid date
        if (isNaN(date.getTime())) {
            message.text("Please enter a valid date.");
            return;
        }
        
        // Calculate days
        let today = new Date();
        let oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
        let days = Math.ceil((date.getTime() - today.getTime()) / oneDay);
        
        // Create and display message
        if (days === 0) {
            message.text(`Hooray! Today is ${event.toLowerCase()}!\n(${date.toDateString()})`);
        } else if (days < 0) {
            event = event.charAt(0).toUpperCase() + event.slice(1);
            message.text(`${event} happened ${Math.abs(days)} day(s) ago.\n(${date.toDateString()})`);
        } else {
            message.text(`${days} day(s) until ${event.toLowerCase()}!\n(${date.toDateString()})`);
        }
    });
    
    $("#event").focus();
});
