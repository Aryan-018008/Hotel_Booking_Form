const form = document.getElementById("form");
const alertBox = document.getElementById("alert");

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const room = document.getElementById("room");
const adultInput = document.getElementById("adult");
const childInput = document.getElementById("child");
const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("name");

/* RESET ON PAGE LOAD */
window.addEventListener("load", () => {
  alertBox.style.display = "none";
  alertBox.className = "alert";
  alertBox.textContent = "";
  form.reset();
});

/* Date Validation */
const today = new Date().toISOString().split("T")[0];
checkin.min = today;

checkin.addEventListener("change", () => {
  if (!checkin.value) return;

  const checkinDate = new Date(checkin.value);
  checkinDate.setDate(checkinDate.getDate() + 1);

  checkout.min = checkinDate.toISOString().split("T")[0];
  checkout.value = "";
});

/* Form Submit */
form.addEventListener("submit", e => {
  e.preventDefault();

  document.querySelectorAll("small").forEach(s => s.style.display = "none");
  alertBox.style.display = "none";

  let valid = true;
  let errorFields = [];

  const adults = +adultInput.value || 0;
  const children = +childInput.value || 0;
  const totalGuests = adults + children;

  /* Validation */
  if (!nameInput.value.trim()) showErr(nameInput, "Full Name");

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phoneInput.value.trim()))
    showErr(phoneInput, "Mobile Number");

  if (!checkin.value) showErr(checkin, "Check-in Date");

  if (!checkout.value)
    showErr(checkout, "Check-out Date");
  else if (new Date(checkout.value) <= new Date(checkin.value))
    showErr(checkout, "Check-out must be after Check-in");

  if (!room.value) showErr(room, "Room Type");
  if (adults < 1) showErr(adultInput, "Adults (minimum 1)");
  if (totalGuests > 10) showErr(childInput, "Total Guests (max 10)");

  function showErr(el, label) {
    el.nextElementSibling.style.display = "block";
    errorFields.push(label);
    valid = false;
  }

  if (!valid) {
    alertBox.innerHTML = `
      ❌ Please fill in the required information<br>
      ${errorFields.join(", ")}
    `;
    alertBox.className = "alert error";
    alertBox.style.display = "block";
    return;
  }

  

  /* SUCCESS */
  alertBox.textContent =
    "✅ Booking submitted successfully! Thank You";
  alertBox.className = "alert success";
  alertBox.style.display = "block";
  form.reset();

  setTimeout(() => {
  alertBox.textContent = "🔄 Redirecting to Home...";
}, 1500);

  
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});


function goHome(){
  window.location.href = "index.html"; // change if needed
}
