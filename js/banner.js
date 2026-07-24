// ======================================
// Sale of the Month Countdown
// ======================================

function initializeCountdown() {

    // Change this to any future date
    const targetDate = new Date("December 31, 2026 23:59:59").getTime();

    const days = document.querySelector(".days");
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");

    function updateCountdown() {

        const now = new Date().getTime();
        const distance = targetDate - now;

        // Countdown Finished
        if (distance <= 0) {

            clearInterval(countdownInterval);

            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";

            return;
        }

        // Time Calculations
        const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));

        const remainingHours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const remainingMinutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const remainingSeconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        // Display Values
        days.textContent = String(remainingDays).padStart(2, "0");
        hours.textContent = String(remainingHours).padStart(2, "0");
        minutes.textContent = String(remainingMinutes).padStart(2, "0");
        seconds.textContent = String(remainingSeconds).padStart(2, "0");

    }

    // Initial Call
    updateCountdown();

    // Update Every Second
    const countdownInterval = setInterval(updateCountdown, 1000);

}

// Run Countdown
initializeCountdown();