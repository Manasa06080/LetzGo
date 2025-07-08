document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.querySelector("form");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission

        const pickup = document.getElementById("pickup-location").value.trim();
        const drop = document.getElementById("drop-location").value.trim();
        const date = document.getElementById("ride-date").value;
        const time = document.getElementById("ride-time").value;
        const vehicle = document.getElementById("vehicle-type").value;

        if (!pickup || !drop || !date || !time || !vehicle) {
            alert("Please fill in all the details.");
            return;
        }

        // Create a booking object
        const bookingDetails = {
            pickup,
            drop,
            date,
            time,
            vehicle
        };

        // Store the booking details in localStorage (this will be used later for backend integration)
        localStorage.setItem("booking", JSON.stringify(bookingDetails));

        // Show success message
        alert("Your ride has been booked successfully!");

        // Redirect to a confirmation page (later we can replace it with backend submission)
        window.location.href = "submit-booking.html";
    });
});
