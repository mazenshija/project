
const targetYear = 2027;
const targetDate = new Date(`Jan 1, ${targetYear} 00:00:00`).getTime();


document.querySelector(".countdown-year").textContent = targetYear;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(intervalVar);
    document.querySelector(".countdown-container").innerHTML = `<h2>🎉 Happy ${targetYear} 🎉</h2>`;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

var intervalVar = setInterval(updateCountdown, 1000);
updateCountdown();




