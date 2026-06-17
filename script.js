document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".rsvp-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // stop form submission

        const selectedAttendance = document.querySelector('input[name="Attendance"]:checked');

        if (!selectedAttendance) {
            alert("Please select whether you will be attending or celebrating from afar.");
            return;
        }

        // Optional: simulate processing
        const submitBtn = document.querySelector(".submit-btn");
        submitBtn.innerText = "Sending Confirmation...";
        submitBtn.disabled = true;

        setTimeout(() => {
            alert("💚 Thank you for your response! Your RSVP has been recorded with love.");
            
            // reset form
            form.reset();

            submitBtn.innerText = "Confirm My Attendance";
            submitBtn.disabled = false;
        }, 1000);
    });
});