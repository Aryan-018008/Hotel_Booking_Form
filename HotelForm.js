const form = document.getElementById("form");
const alertBox = document.getElementById("alert");

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const room = document.getElementById("room");
const adultInput = document.getElementById("adult");
const childInput = document.getElementById("child");
const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("name");

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

/*Form Submit */
form.addEventListener("submit", e => {
  e.preventDefault();

  document.querySelectorAll("small").forEach(s => s.style.display = "none");
  alertBox.style.display = "none";

  let valid = true;
  let errorFields = [];

  const adults = +adultInput.value || 0;
  const children = +childInput.value || 0;
  const totalGuests = adults + children;

  /*-Overall Validation-*/

  if (!nameInput.value.trim()) {
    showErr(nameInput, "Full Name");
  }

  //Mobile Number Validation
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phoneInput.value.trim())) {
    showErr(phoneInput, "Mobile Number");
  }

  if (!checkin.value) {
    showErr(checkin, "Check-in Date");
  }

  // 🔴 CORE CHECK-OUT VALIDATION
  if (!checkout.value) {
    showErr(checkout, "Check-out Date");
  } else if (new Date(checkout.value) <= new Date(checkin.value)) {
    showErr(checkout, "Check-out must be after Check-in");
  }

  if (!room.value) {
    showErr(room, "Room Type");
  }

  if (adults < 1) {
    showErr(adultInput, "Adults (minimum 1)");
  }

  if (totalGuests > 10) {
    showErr(childInput, "Total Guests (max 10)");
  }

  function showErr(el, label) {
    el.nextElementSibling.style.display = "block";
    errorFields.push(label);
    valid = false;
  }


if (!valid) {
  alertBox.innerHTML = `
    ❌ Please fill in the required information to proceed<br>
    ${errorFields.join(", ")}
  `;
  alertBox.className = "alert error";
  alertBox.style.display = "block";
  return;
}

  alertBox.textContent = "✅ Booking submitted successfully!";
  alertBox.className = "alert success";
  alertBox.style.display = "block";
  form.reset();

//  Alery
  setTimeout(() => {
  alertBox.style.display = "none";
}, 900);
});