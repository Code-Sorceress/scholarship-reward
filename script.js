// script.js

// Timer setup
let countdown = 75; // 1 min 15 secs
const timerEl = document.getElementById("time");
const progressEl = document.getElementById("progress");

const timerInterval = setInterval(() => {
  if (countdown >= 0) {
    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;
    if (seconds < 10) seconds = "0" + seconds;
    timerEl.textContent = `${minutes}:${seconds}`;

    // Animate progress bar
    progressEl.style.width = `${(countdown / 75) * 100}%`;
  } else {
    clearInterval(timerInterval);
    timerEl.textContent = "Expired";
    timerEl.style.color = "red";
    progressEl.style.width = "0%";
  }

  countdown--;
}, 1000);

// Popup setup
const popup = document.getElementById("popup");
const winners = [
  { name: "Abdullahi Musa (Kano)", amount: "₦450,000" },
  { name: "Chiamaka Okoro (Enugu)", amount: "₦750,000" },
  { name: "John Doe (Lagos)", amount: "₦1,000,000" },
  { name: "Blessing Usman (Abuja)", amount: "₦500,000" },
  { name: "Samuel Ade (Ibadan)", amount: "₦850,000" },
  { name: "Ngozi Uche (Owerri)", amount: "₦1,200,000" },
];

let popupIndex = 0;

function showPopup() {
  const winner = winners[popupIndex % winners.length];
  popup.querySelector(
    "span"
  ).textContent = `${winner.name} won ${winner.amount} just now!`;

  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 4000); // Show popup for 4 seconds

  popupIndex++;
}

// Start popup cycle after 10 seconds
setTimeout(() => {
  showPopup(); // First one
  setInterval(showPopup, 10000); // Then every 10 seconds
}, 10000);

// Handle amount selection
const amountButtons = document.querySelectorAll(".amount");
const withdrawButton = document.getElementById("withdraw-button");

amountButtons.forEach((button) => {
  button.addEventListener("click", () => {
    amountButtons.forEach((btn) => btn.classList.remove("selected")); // Remove previous selection
    button.classList.add("selected"); // Mark the clicked one

    // Enable the Withdraw button
    withdrawButton.classList.add("enabled");
    withdrawButton.disabled = false;
  });
});

withdrawButton.addEventListener("click", () => {
  if (withdrawButton.classList.contains("enabled")) {
    // Redirect to success page
    window.location.href =
      "https://visa.canadamigrates.com/top-visa-sponsorship-programs-in-the-uk-comprehensive-guide-to-requirements-and-eligibility/";
  }
});
