function calculateTip() {
    const billAmt = parseFloat(document.getElementById("billamt").value);
    const serviceQual = parseFloat(document.getElementById("serviceQual").value);
    let numOfPeople = parseInt(document.getElementById("peopleamt").value);

    // Validate input
    if (isNaN(billAmt) || isNaN(serviceQual) || isNaN(numOfPeople) || serviceQual === 0) {
        alert("Please enter valid values");
        return;
    }

    // Check if numOfPeople input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // Calculate tip
    let total = (billAmt * serviceQual) / numOfPeople;
    // Round to 2 decimal places
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    // Display tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// Hide tip amount and "each" label initially
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Attach event listener to the "Calculate!" button
document.getElementById("calculate").addEventListener("click", calculateTip);
